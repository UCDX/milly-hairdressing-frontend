import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/lib/milly-data-clases';
import { ActionButton } from 'src/app/lib/component-clases';
import { ReservationCardActionEvent } from '../../components/reservation-card/reservation-card.component';
import { MillyBackendService } from 'src/app/services/milly-backend/milly-backend.service';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session/session.service';
import { Service } from 'src/app/lib/milly-data-clases';

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

  constructor(
    private milly: MillyBackendService,
    private router: Router,
    private session: SessionService
  ) { }

  ngOnInit(): void {
    this.milly.getReservations().subscribe(res => {
      console.log(res)
      this.reservations = res.data.reservations
    });
  }

  actionHandler(event: ReservationCardActionEvent) {
    //Aquí se maneja lo que ocurre cuando se presiona un botón de las tarjetas de los servicios.
    console.log(event);

    if(event.actionCodeName == 'modify') {
      let service = new Service
      service.service_name = event.reservation.service_name;
      this.session.setService(service)
      this.router.navigateByUrl('/modifyappointment/'+event.reservation.id_reservation);
      return;
    }

    if(event.actionCodeName == 'cancel') {
      this.router.navigateByUrl('/cancel-appointment');
      return;
    }

    alert(`Se precionó la acción: "${event.actionCodeName}" para la reservación con id: "${event.reservation.id_reservation}".`);
  }
}
