import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Reservation } from 'src/app/lib/milly-data-clases';
import { ActionButton } from 'src/app/lib/component-clases';
import * as moment from 'moment';

@Component({
  selector: 'app-reservation-card',
  templateUrl: './reservation-card.component.html',
  styleUrls: ['./reservation-card.component.css']
})
export class ReservationCardComponent implements OnInit {

  @Input() reservation: Reservation = new Reservation;
  @Input() actions: ActionButton[] = [];
  @Output() action: EventEmitter<any> = new EventEmitter;
  date: string = '';

  constructor() { }

  ngOnInit(): void {
    this.date = moment(this.reservation.reservation_date).format('LL');
  }

  optionHandler(codeName: string) {
    let event: ReservationCardActionEvent = {
      actionCodeName: codeName,
      reservation: this.reservation
    };

    this.action.emit(event);
  }
}

export class ReservationCardActionEvent {
  actionCodeName: string = '';
  reservation: Reservation = new Reservation;
}