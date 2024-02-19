import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { SaveUserComponent } from './save-user/save-user.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'users', component: UserListComponent},
  {path: 'save-user', component: SaveUserComponent},
  {path: 'user-details/:id', component:UsersDetailsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
