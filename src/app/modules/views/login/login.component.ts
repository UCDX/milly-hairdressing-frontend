import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  loginBoxHandler(event: any) {
    console.log(event)
    if(event.button == 'left') {
      this.router.navigateByUrl('/register')
    }
  }

}
