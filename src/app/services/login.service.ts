// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class LoginService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loggedInKey = 'loggedIn';

  login(username: string, password: string): boolean {
    if (username === 'TestId' && password === 'Password') {
      localStorage.setItem(this.loggedInKey, 'true'); // Store login state in localStorage
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.loggedInKey); // Clear login state
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.loggedInKey) === 'true';
  }
}
