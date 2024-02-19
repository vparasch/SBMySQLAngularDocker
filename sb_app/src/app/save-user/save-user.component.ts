import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Addresses } from '../addresses';

@Component({
  selector: 'app-save-user',
  templateUrl: './save-user.component.html',
  styleUrl: './save-user.component.css'
})
export class SaveUserComponent implements OnInit{

  addresses: Addresses = new Addresses(0, "", "")
  user: User = new User(0, "", "", "", "", this.addresses);
  constructor(private userService: UserService,
    private router: Router, private datePipe: DatePipe) {}

  ngOnInit(): void{
  }


  saveUser(){
    this.userService.saveUser(this.user).subscribe(data=>{
      this.goToUserList();
    },
    error => console.log(error));
  }

  goToUserList(){
    this.router.navigate(['/users']);
  }

  formatDateForBackend(date: string): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd')!;
  }

  onSubmit(){

      // Reformat date
      const selectedDate: string = this.user.birthdate;
      const formattedDate = this.formatDateForBackend(selectedDate);
      this.user.birthdate = formattedDate;

      this.saveUser();
  }

}
