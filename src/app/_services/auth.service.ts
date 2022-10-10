import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://assignment-api.piton.com.tr/api/v1';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'
   ,'Access-Control-Allow-Origin':'*',
   "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST",
   "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"  })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(
     'prod/api/v1/user/login',
      {
        email,
        password,
      },
      httpOptions
    );
  }

  register(name: string, password: string, email: string): Observable<any> {
    return this.http.post(
     'prod/api/v1/user/register',
      {
        name,
        password,
        email,
      },
      httpOptions
    );
  }
  

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }
}
