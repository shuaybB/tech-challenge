import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ApiService } from './Services/api.service';
import { ApiInterceptorService } from './Services/api-interceptor.service';
import { UserListComponent } from './user-list/user-list.component';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from './product-card/product-card.component';
import { MessageCardComponent } from './message-card/message-card.component';
import { ContractCardComponent } from './contract-card/contract-card.component';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    NotificationListComponent,
    ProductCardComponent,
    MessageCardComponent,
    ContractCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
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
