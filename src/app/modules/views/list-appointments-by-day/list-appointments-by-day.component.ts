import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AdminReservation } from 'src/app/lib/milly-data-clases';
import { ActionButton } from 'src/app/lib/component-clases';
import { AdminReservationCardActionEvent } from '../../components/admin-reservation-card/admin-reservation-card.component';
import { MillyBackendService } from 'src/app/services/milly-backend/milly-backend.service';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session/session.service';
import { Service } from 'src/app/lib/milly-data-clases';
import * as moment from 'moment';

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
  day: string = '';

  constructor(
    private milly: MillyBackendService,
    private router: Router,
    private session: SessionService
  ) { }

  ngOnInit(): void {
  }

  actionHandler(event: AdminReservationCardActionEvent) {
    console.log(event);

    if(event.actionCodeName == 'modify') {
      let service = new Service
      service.service_name = event.reservation.service_name;
      this.session.setService(service)
      this.router.navigateByUrl('/modifyappointment/'+event.reservation.id_reservation);
      return;
    }

    if(event.actionCodeName == 'cancel') {
      let service = new Service
      service.service_name = event.reservation.service_name;
      this.router.navigateByUrl('/cancel-appointment/'+event.reservation.id_reservation);
      return;
    }

    //Aquí se maneja lo que ocurre cuando se presiona un botón de las tarjetas de los servicios.
    console.log(event);
    alert(`Se presionó la acción: "${event.actionCodeName}" para la reservación con id: "${event.reservation.id_reservation}".`);
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
        this.day = moment(event.dayField.trim()).format('YYYY/MM/DD');
        //alert(this.day);
        this.milly.getReservationsByDay(this.day).subscribe(res => {
          console.log(res)
          this.reservations = res.data.reservations
          alert(res.messages.join(' | '))
        });
        /*
        this.reservations = [
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
          }
        ]
        */
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
