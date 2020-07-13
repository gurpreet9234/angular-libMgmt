import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAdmin: boolean;
  registrationHeader: boolean;
  user: any;
  constructor( private router: Router) { }

  ngOnInit(): void {
    const username = localStorage.getItem('username');
    if (username === 'admin'){
      this.isAdmin = true;
      this.user = username;
    }
    else if  (username === null) {
    this.registrationHeader = true;
    }
    else {
      this.user = username;
    }

  }

  logLout(): void {
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }

}
