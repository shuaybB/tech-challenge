import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Contract } from '../Models/Contract';
import { Message } from '../Models/Message';
import { Product } from '../Models/Product';
import { User } from '../Models/User';
import { ApiService } from '../Services/api.service';
import {flatMap} from 'rxjs/operators'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {

  Messages: Message[] = []
  Contracts: Contract[] = []
  Products: Product[] = []
  users: Observable <User[]>
  userNameList: User[]
  selectedCategory = 0
  isAdmin = false
  isLoading = true

  constructor(private apiservice: ApiService) { 
    this.users = this.apiservice.getUsersList()
    
  }

  ngOnInit(): void {

    //Check token to allow filter option
    if (sessionStorage.getItem('token') == environment.ADMIN){
      this.isAdmin = true
    }

    //get list of users for username, map values for notifications
    this.users.pipe(flatMap(success => {
      this.userNameList = success
      return this.apiservice.getNotifications()
    })).subscribe(data => {
      if (data){
        data.forEach(element => {
          switch(element["notification_type"]){
            case "NEW_PRODUCT": {
              this.Products.push(element)
              break
            }
            case "NEW_CONTRACT": {
              let sender = this.userNameList.find(x => x.id === element['sender'])
              let receiver = this.userNameList.find(x => x.id === element['receiver'])
              this.Contracts.push({
                notification_type: element['notification_type'],
                notification_id: element['notification_id'],
                sender: element['sender'],
                receiver: element['receiver'],
                expiration_date: element['expiration_date'] ,
                senderName: sender.name,
                receiverName: receiver.name,
              })
              break
            }
            case "NEW_MESSAGE": {
              let sender = this.userNameList.find(x => x.id === element['from'])
              this.Messages.push({
                notification_type: element['notification_type'],
                notification_id: element['notification_id'],
                from: element['from'],
                date: element['date'],
                image: element['image'],
                message: element['message'],
                senderName:sender.name
              })
              break
            }
          }
  
        });
        this.isLoading = false
      }
    })

 
   
  }

}
