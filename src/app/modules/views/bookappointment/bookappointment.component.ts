import { Component, OnInit } from '@angular/core';
import { MillyBackendService } from 'src/app/services/milly-backend/milly-backend.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.css']
})
export class BookAppointmentComponent implements OnInit {

  constructor(
      private milly: MillyBackendService,
      private route: ActivatedRoute
    ) { }
  
  public service_id:any = '';

  ngOnInit(): void {
    this.route.paramMap.subscribe(dat => {
      console.log(dat.get('service_id'));
      this.service_id = dat.get('service_id');
    });
  }

  bookappointmentBoxHandler(event: any) {
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
    this.milly.createReservation( event.firstField, event.fourthField, event.thirdField)
      .subscribe(res => {
        console.log(res);
        alert(res.messages.join(' | '));
      });
  }
}

