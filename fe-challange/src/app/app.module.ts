import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ApiService } from './Services/api.service';
import { ApiInterceptorService } from './Services/api-interceptor.service';
import { UserListComponent } from './user-list/user-list.component';
import { NotificationListComponent } from './notification-list/notification-list.component';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    NotificationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
