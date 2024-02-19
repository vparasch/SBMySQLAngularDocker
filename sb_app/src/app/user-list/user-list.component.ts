import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{

  users: User[] = [];

  constructor(private userService: UserService,
              private router: Router) { 
  }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(){
    this.userService.getUsersList().subscribe(data =>{
      this.users = data
    });
  }

  displayUserDetails(id: number){
    this.router.navigate(['user-details', id])
  }

  deleteUser(id: number){
    this.userService.deleteUser(id).subscribe(data=>{
      this.getUsers();
    })
  }


}
