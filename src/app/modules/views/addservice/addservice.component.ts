import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.css']
})
export class AddserviceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addserviceBoxHandler(event: any) {
    console.log(event)
    event.firstField = event.firstField.trim();
    if(event.firstField == '') {
      alert('El campo Nombre Servicio es requerido')
      return;
    }
    event.secondField = event.secondField.trim();
    if(event.secondField == '') {
      alert('El campo Precio es requerido')
      return;
    }
    event.thirdField = event.thirdField.trim();
    if(event.thirdField == '') {
      alert('El campo Descripción Servicio es requerido')
      return;
    }
    event.fifthField = event.fifthField.trim();
    if(event.fifthField == '') {
      alert('El campo Duración es requerido')
      return;
    }
  }

}
