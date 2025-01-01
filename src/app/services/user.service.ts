import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserAuth } from '../models/userAuth';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  BASE_URLS: string = 'http://localhost:3000';
  FIREBASE_URLS: string =
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCBtxixk3g1D7DoICBhvuV180KioEjFX2g';
  TOKEN_FIREBASE: string = '';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.BASE_URLS + '/users');
  }

  login(data: any): Observable<UserAuth> {
    console.log(data);
    return this.http.post<UserAuth>(
      this.FIREBASE_URLS + this.TOKEN_FIREBASE,
      data,
      httpOptions
    );
  }
  addUser(user: any): Observable<User> {
    return this.http.post<User>(this.BASE_URLS + '/users', user, httpOptions);
  }
  editUser(user: any): Observable<User> {
    let url: string = this.BASE_URLS + '/users/' + user.id;
    return this.http.put<User>(url, user, httpOptions);
  }

  deleteUser(user: any): Observable<User> {
    let url: string = this.BASE_URLS + '/users/' + user.id;
    return this.http.delete<User>(url + '/users/', httpOptions);
  }
}
