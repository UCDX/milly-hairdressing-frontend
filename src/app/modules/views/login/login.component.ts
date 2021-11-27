import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MillyBackendService } from 'src/app/services/milly-backend/milly-backend.service';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private milly: MillyBackendService,
    private session: SessionService
  ) { }

  ngOnInit(): void {
  }

  loginBoxHandler(event: any) {
    console.log(event)
    if(event.button == 'left') {
      this.router.navigateByUrl('/register')
      return;
    }

    event.firstField = event.firstField.trim();
    event.secondField = event.secondField.trim();

    if(event.firstField == '') {
      alert('El campo "Correo electrónico" es requerido.');
      return
    } else if(event.secondField == '') {
      alert('El campo "Contraseña" es requerido.');
      return;
    }

    this.milly.signin(event.firstField, event.secondField)
      .subscribe(res => {
        if(res.code == 0) {
          this.session.setUserData(res.data)
          this.router.navigateByUrl('/services')
        } else {
          alert(res.messages.join(' | '))
        }
      })
  }

}
