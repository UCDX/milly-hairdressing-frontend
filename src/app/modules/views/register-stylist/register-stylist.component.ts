import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-stylist',
  templateUrl: './register-stylist.component.html',
  styleUrls: ['./register-stylist.component.css']
})
export class RegisterStylistComponent implements OnInit {

  constructor() { }

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
  }
}
