import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

    getAuthToken(){
      return sessionStorage.getItem('token')
    }
    setAuthToken(val: string){
      sessionStorage.setItem('token', val);  
    }

    //USERS
    getUsersList() {
      return this.http.get<User[]>("/api/users");
    }

    //NOTIFICATIONS 
    getNotifications(){
      return this.http.get<any>("/api/notifications");
    }



}
