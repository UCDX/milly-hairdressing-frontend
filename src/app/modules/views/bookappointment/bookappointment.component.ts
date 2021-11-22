import { Component, OnInit } from '@angular/core';
import { MillyBackendService } from 'src/app/services/milly-backend/milly-backend.service';

@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.css']
})
export class BookAppointmentComponent implements OnInit {

  constructor(
    private milly: MillyBackendService
  ) { }

  ngOnInit(): void {
  }

  bookappointmentBoxHandler(event: any) {
    console.log(event)

    if(event.button == 'left') {
      alert('Volver aun no esta implementado')
      return;
    }
  }
}
