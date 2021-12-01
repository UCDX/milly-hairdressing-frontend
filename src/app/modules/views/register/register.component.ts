import { Component, OnInit } from '@angular/core';
import { BasicUserData } from 'src/app/lib/milly-data-clases';
import { MillyBackendService } from 'src/app/services/milly-backend/milly-backend.service';
import { SessionService } from 'src/app/services/session/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private milly: MillyBackendService,
    private session: SessionService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  registerBoxHandler(event: any) {
    console.log(event)

    if(event.button == 'left') {
      alert('Volver aun no esta implementado')
      return;
    }

    event.firstField = event.firstField.trim();
    if(event.firstField == '') {
      alert('El campo Nombre es requerido')
      return;
    }
    event.secondField = event.secondField.trim();
    if(event.secondField == '') {
      alert('El campo Apellido es requerido')
      return;
    }
    event.thirdField = event.thirdField.trim();
    if(event.thirdField == '') {
      alert('El campo Correo electrónico es requerido')
      return;
    }
    event.fifthField = event.fifthField.trim();
    if(event.fifthField == '') {
      alert('El campo Contraseña es requerido')
      return;
    }

    //ok
    if(event.button == 'right') {
      let userdata: BasicUserData = {
        user_type_id: 3,
        firstname: event.firstField,
        lastname: event.secondField,
        email: event.thirdField,
        phone_number: event.fourthFieldLabel,
        passwd: event.fifthField
      };
  
      this.milly.signup(userdata).subscribe(res => {
        console.log(res);
        alert(res.messages.join(' | '))
        this.session.setUserData(res.data);
        if(res.code == 0) {
          this.router.navigateByUrl('/')
        }
      })
    }
  }

}
