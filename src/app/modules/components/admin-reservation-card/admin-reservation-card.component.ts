import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AdminReservation } from 'src/app/lib/milly-data-clases';
import { ActionButton } from 'src/app/lib/component-clases';
import * as moment from 'moment';

@Component({
  selector: 'app-admin-reservation-card',
  templateUrl: './admin-reservation-card.component.html',
  styleUrls: ['./admin-reservation-card.component.css']
})
export class AdminReservationCardComponent implements OnInit {

  @Input() reservation: AdminReservation = new AdminReservation;
  @Input() actions: ActionButton[] = [];
  @Output() action: EventEmitter<any> = new EventEmitter;
  date: string = '';
  name: string = '';
  constructor() { }

  ngOnInit(): void {
    this.date = moment(this.reservation.reservation_date).format('LL');
    this.name = this.reservation.firstname + ' ' + this.reservation.lastname;
  }

  optionHandler(codeName: string) {
    let event: AdminReservationCardActionEvent = {
      actionCodeName: codeName,
      reservation: this.reservation
    };

    this.action.emit(event);
  }
}

export class AdminReservationCardActionEvent {
  actionCodeName: string = '';
  reservation: AdminReservation = new AdminReservation;
}