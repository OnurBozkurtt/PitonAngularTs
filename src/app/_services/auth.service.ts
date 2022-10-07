import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://assignment-api.piton.com.tr/api/v1/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'user/login',
      {
        email,
        password,
      },
      httpOptions
    );
  }

  register(firstName: string,lastName: string,phoneNumber: string, email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'user/register',
      {
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }
}
