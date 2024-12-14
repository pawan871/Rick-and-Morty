import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(public loginService: LoginService, private router: Router) {}

  onLogout(): void {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
  

}
