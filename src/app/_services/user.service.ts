import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class userService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private AuthService: AuthService) {
    const token = localStorage.getItem('access-token');
    this._isLoggedIn$.next(!!token);
  }

  login(username: string, password: string) {
    return this.AuthService.login(username, password).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true);
        localStorage.setItem('access-token', response.token);
      })
    );
  }
}
