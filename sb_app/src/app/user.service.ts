import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private displayUsersURL = "http://localhost:8080/display-users";
  private saveUserURL = "http://localhost:8080/save-user";
  private deleteUserURL = "http://localhost:8080/delete-user";
  private displayUserByIdURL = "http://localhost:8080/display-users";
  constructor(private httpClient: HttpClient) { }

  getUsersList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.displayUsersURL}`);
  }

  saveUser(user: User): Observable<Object>{
    return this.httpClient.post(`${this.saveUserURL}`, user);
  }

  deleteUser(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.deleteUserURL}/${id}`);
  }

  getUserById(id: number): Observable<User>{
    return this.httpClient.get<User>(`${this.displayUserByIdURL}/${id}`);
  }

}
