import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Addresses } from '../addresses';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrl: './users-details.component.css'
})
export class UsersDetailsComponent implements OnInit{

  addresses = new Addresses(0, "", "");
  id = 0;
  user = new User(0, "", "", "", "", this.addresses)

  constructor(private route:ActivatedRoute, private userService: UserService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.userService.getUserById(this.id).subscribe(data =>{
      this.user=data;
      console.log(this.user)
    })
  }
}
