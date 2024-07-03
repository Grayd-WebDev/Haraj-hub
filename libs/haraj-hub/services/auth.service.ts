// auth.service.ts
import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false;

  constructor() { }

  signIn(email: string, password: string) {
    this.loggedIn = true;
    return of({ success: true }).pipe(delay(1000));
  }
  
  signUp(email: string, password: string) {
    this.loggedIn = true;
    return of({ success: true }).pipe(delay(1000));
  }

  logout() {
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
