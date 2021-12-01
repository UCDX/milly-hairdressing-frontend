import { Component, OnInit } from '@angular/core';
import { MillyBackendService } from 'src/app/services/milly-backend/milly-backend.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifyappointment',
  templateUrl: './modifyappointment.component.html',
  styleUrls: ['./modifyappointment.component.css']
})
export class ModifyAppointmentComponent implements OnInit {

  constructor(
      private milly: MillyBackendService,
      private route: ActivatedRoute
    ) { }
  
  public service_id:any = '';

  ngOnInit(): void {
    this.route.paramMap.subscribe(dat => {
      console.log(dat.get('service_id')); //Obtener service id de list_appointments
      this.service_id = dat.get('service_id');
    });
  }

  modifyappointmentBoxHandler(event: any) {
    console.log(event)

    event.thirdField = event.thirdField.trim();
    if(event.thirdField == '') {
      alert('El campo Fecha Servicio es requerido')
      return;
    }
    event.fourthField = event.fourthField.trim();
    if(event.fourthField == '') {
      alert('El campo Duración Servicio es requerido')
      return;
    }
    //Consumir API para recuperar detalles de la cita
    this.milly.blockedTime( event.fourthField)
      .subscribe(res => {
        console.log(res);
        alert(res.messages.join(' | '));
      });
  }
}

