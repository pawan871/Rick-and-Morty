import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  errorMessage = ''; // Add this property to store error messages

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    // If already logged in, redirect to the character list page here 
    if (this.loginService.isLoggedIn()) {
      this.router.navigate(['/']);
    }
  }

  onLogin(): void {
    if (this.loginService.login(this.username, this.password)) {
      this.router.navigate(['/']); // Redirect to the character list
    } else {
      this.errorMessage = 'Invalid username or password'; // Set the error message on login failure
    }
  }
}
