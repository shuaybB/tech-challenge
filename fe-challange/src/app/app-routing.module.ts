import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  },
  {
    path: 'notifications',
    component: NotificationListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
