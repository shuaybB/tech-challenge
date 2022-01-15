import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from '../Models/User';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  Users: User[]
  constructor(private apiservice: ApiService, private router: Router, private route: ActivatedRoute){ }
  setUser(id:number){
    if (id != null) {
      switch(id){
        case 0:{
          this.apiservice.setAuthToken(environment.ADMIN)
          break
        }
        case 1:{
          this.apiservice.setAuthToken(environment.DOMESTIC_COSTUMER)
          break
        }
        case 2:{
          this.apiservice.setAuthToken(environment.FOREIGN_COSTUMER)
          break
        }
      }
      this.router.navigate(['notifications'])
    }
  }

  ngOnInit():void{
    this.apiservice.getUsersList().subscribe(data => {
      this.Users = data
    }, err => {
      console.log(err)
    })
  }

}
