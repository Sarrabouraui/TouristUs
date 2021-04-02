import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  user: string;
  password: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logIn(myform: NgForm){
    // tslint:disable-next-line:triple-equals
    if( this.user == 'admin' && this.password == 'ADMIN'){
      this.router.navigate(['../bo']);
    }
    else {
      this.router.navigate(['../404']);
    }
  }
}
