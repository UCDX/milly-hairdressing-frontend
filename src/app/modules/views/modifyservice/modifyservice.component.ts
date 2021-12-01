import { Component, OnInit } from '@angular/core';
import { MillyBackendService } from 'src/app/services/milly-backend/milly-backend.service';

@Component({
  selector: 'app-modifyservice',
  templateUrl: './modifyservice.component.html',
  styleUrls: ['./modifyservice.component.css']
})
export class ModifyserviceComponent implements OnInit {

  constructor(
    private milly: MillyBackendService
  ) { }

  ngOnInit(): void {
  }

  modifyserviceBoxHandler(event: any) {
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
