import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/lib/milly-data-clases';
import { ActionButton } from 'src/app/lib/component-clases';
import { ReservationCardActionEvent } from '../../components/reservation-card/reservation-card.component';

@Component({
  selector: 'app-list-appointments',
  templateUrl: './list-appointments.component.html',
  styleUrls: ['./list-appointments.component.css']
})
export class ListAppointmentsComponent implements OnInit {

  reservations: Reservation[] | null = null;
  actions: ActionButton[] = [
    {
      displayName: 'Modificar',
      codeName: 'modify',
      color: ''
    },
    {
      displayName: 'Cancelar',
      codeName: 'cancel',
      color: 'warn'
    }
  ]

  constructor() { }

  ngOnInit(): void {
    //Estos datos se traerán del backend.
    //De momento es simulado.
    this.reservations = [
      {
        id_reservation: 1,
        reservation_date: new Date(),
        start_time: 8,
        end_time: 9,
        service_id: 1,
        service_name: 'Corte de cabello',
        cost: 100,
        service_short_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices est nec arcu rutrum volutpat. Curabitur lobortis lacus ligula, sit amet commodo ipsum blandit at. Proin ut bibendum nisl. Mauris ac tincidunt purus, at placerat ligula.',
        service_duration: 1,
        is_service_active: 1
      },
      {
        id_reservation: 2,
        reservation_date: new Date(),
        start_time: 14,
        end_time: 15,
        service_id: 2,
        service_name: 'Alaciado',
        cost: 150,
        service_short_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices est nec arcu rutrum volutpat. Curabitur lobortis lacus ligula, sit amet commodo ipsum blandit at. Proin ut bibendum nisl. Mauris ac tincidunt purus, at placerat ligula.',
        service_duration: 1,
        is_service_active: 1
      }
    ]
  }

  actionHandler(event: ReservationCardActionEvent) {
    //Aquí se maneja lo que ocurre cuando se presiona un botón de las tarjetas de los servicios.
    console.log(event);
    alert(`Se precionó la acción: "${event.actionCodeName}" para la reservación con id: "${event.reservation.id_reservation}".`);
  }
}
