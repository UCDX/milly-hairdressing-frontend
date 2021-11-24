import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AdminReservation } from 'src/app/lib/milly-data-clases';
import { ActionButton } from 'src/app/lib/component-clases';
import { AdminReservationCardActionEvent } from '../../components/admin-reservation-card/admin-reservation-card.component';

@Component({
  selector: 'app-list-appointments-by-day',
  templateUrl: './list-appointments-by-day.component.html',
  styleUrls: ['./list-appointments-by-day.component.css']
})
export class ListAppointmentsByDayComponent implements OnInit {

  reservations: AdminReservation[] | null = null;
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
  }

  actionHandler(event: AdminReservationCardActionEvent) {
    //Aquí se maneja lo que ocurre cuando se presiona un botón de las tarjetas de los servicios.
    console.log(event);
    alert(`Se precionó la acción: "${event.actionCodeName}" para la reservación con id: "${event.reservation.id_reservation}".`);
  }

  selectDayBoxHandler(event: any) {
    console.log(event)

    if(event.button == 'right') {
      if( event.dayField.trim() == "")
      {
        alert('Selecciona una fecha')
      }
      else if(this.checkDayFormat(event.dayField.trim()))
      {
        this.reservations = [
          {
            id_reservation: 1,
            user_id: 1,
            firstname: 'Pedra',
            lastname: 'Nieto',
            reservation_date: new Date(),
            start_time: 8,
            end_time: 9,
            service_id: 1,
            service_name: 'Corte de cabello',
            cost: 100,
            service_description: 'Corte de cabello',
            service_short_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices est nec arcu rutrum volutpat. Curabitur lobortis lacus ligula, sit amet commodo ipsum blandit at. Proin ut bibendum nisl. Mauris ac tincidunt purus, at placerat ligula.',
            service_duration: 1,
            is_service_active: 1
          },
          {
            id_reservation: 2,
            user_id: 2,
            firstname: 'Carlota',
            lastname: 'De Gortari',
            reservation_date: new Date(),
            start_time: 14,
            end_time: 15,
            service_id: 2,
            service_name: 'Alaciado',
            cost: 150,
            service_description: 'Alaciado',
            service_short_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices est nec arcu rutrum volutpat. Curabitur lobortis lacus ligula, sit amet commodo ipsum blandit at. Proin ut bibendum nisl. Mauris ac tincidunt purus, at placerat ligula.',
            service_duration: 1,
            is_service_active: 1
          },
          {
            id_reservation: 3,
            user_id: 3,
            firstname: 'Lucía',
            lastname: 'Mateos',
            reservation_date: new Date(),
            start_time: 13,
            end_time: 14,
            service_id: 3,
            service_name: 'Peinado 1',
            cost: 550,
            service_description: 'Peinado 1',
            service_short_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices est nec arcu rutrum volutpat. Curabitur lobortis lacus ligula, sit amet commodo ipsum blandit at. Proin ut bibendum nisl. Mauris ac tincidunt purus, at placerat ligula.',
            service_duration: 1,
            is_service_active: 1
          },
          {
            id_reservation: 4,
            user_id: 4,
            firstname: 'Jimena',
            lastname: 'Quezada',
            reservation_date: new Date(),
            start_time: 11,
            end_time: 13,
            service_id: 4,
            service_name: 'Mascarilla',
            cost: 250,
            service_description: 'Mascarilla',
            service_short_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices est nec arcu rutrum volutpat. Curabitur lobortis lacus ligula, sit amet commodo ipsum blandit at. Proin ut bibendum nisl. Mauris ac tincidunt purus, at placerat ligula.',
            service_duration: 2,
            is_service_active: 0
          }
        ]
      }
      else
      {
        alert('Selecciona una fecha válida')
      }
      return;
    }
  }
  checkDayFormat(day: string): boolean
  {
    if( day == "")
    {
      return false;
    }
    if( day.split("/").length != 3)
    {
      return false;
    }
    // Add more checks
    return true;
  }
}
