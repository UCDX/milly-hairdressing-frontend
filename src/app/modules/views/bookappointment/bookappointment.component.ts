import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.css']
})
export class BookAppointmentComponent implements OnInit {

  constructor() { }

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
