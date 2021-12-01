import { Component, OnInit } from '@angular/core';
import { BasicUserData } from 'src/app/lib/milly-data-clases';
import { MillyBackendService } from 'src/app/services/milly-backend/milly-backend.service';
import { SessionService } from 'src/app/services/session/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-stylist',
  templateUrl: './register-stylist.component.html',
  styleUrls: ['./register-stylist.component.css']
})
export class RegisterStylistComponent implements OnInit {

  constructor(
    private milly: MillyBackendService,
    private session: SessionService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  registerStylistBoxHandler(event: any) {
    console.log(event)
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
    event.seventhField = event.seventhField.trim();
    if(event.seventhField == '') {
      alert('El campo Contraseña es requerido')
      return;
    }
    if(event.seventhField.length < 6) {
      alert('La contraseña debe tener al menos seis caracteres')
      return;
    }

    let userdata: BasicUserData = {
      user_type_id: 2,
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
