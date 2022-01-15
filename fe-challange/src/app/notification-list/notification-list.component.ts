import { Component, OnInit } from '@angular/core';
import { Contract } from '../Models/Contract';
import { Message } from '../Models/Message';
import { Product } from '../Models/Product';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {

  constructor(private apiservice: ApiService) { }
  Messages: Message[] = []
  Contracts: Contract[] = []
  Products: Product[] = []
  ngOnInit(): void {
    this.apiservice.getNotifications().subscribe(data => {
      if (data){
        data.forEach(element => {
          switch(element["notification_type"]){
            case "NEW_PRODUCT": {
              this.Products.push(element)
              break
            }
            case "NEW_CONTRACT": {
              this.Contracts.push(element)
              break
            }
            case "NEW_MESSAGE": {
              this.Messages.push(element)
              break
            }
          }
  
        });
      }
    },err =>{})
  }

}
