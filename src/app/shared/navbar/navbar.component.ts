import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  exit() {
    this.authService.logout();
    this._router.navigateByUrl('/login')
  }

}
