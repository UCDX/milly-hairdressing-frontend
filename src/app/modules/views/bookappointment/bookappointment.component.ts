import { Component, OnInit } from '@angular/core';
import { MillyBackendService } from 'src/app/services/milly-backend/milly-backend.service';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from 'src/app/services/session/session.service';
import { Service } from 'src/app/lib/milly-data-clases';
import * as moment from 'moment';

@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.css']
})
export class BookAppointmentComponent implements OnInit {

  constructor(
      private milly: MillyBackendService,
      private route: ActivatedRoute,
      private session: SessionService
    ) { }
  
  public service_id:any = '';
  public service: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe(dat => {
      console.log(dat.get('service_id'));
      this.service_id = dat.get('service_id');
      this.service = this.session.getService();
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
    //event.thirdField = event.thirdField.split('/').reverse().join('-')
    event.thirdField = moment(event.thirdField).format('YYYY-MM-DD')
    console.log(event.thirdField)
    this.milly.createReservation( this.service_id, event.thirdField, event.fourthField)
      .subscribe(res => {
        console.log(res);
        alert(res.messages.join(' | '));
      });
  }
}

