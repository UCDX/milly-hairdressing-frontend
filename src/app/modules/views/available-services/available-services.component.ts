import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/lib/milly-data-clases';
import { ActionButton } from 'src/app/lib/component-clases';
import { ServiceCardActionEvent } from '../../components/service-card/service-card.component';
import { MillyBackendService } from 'src/app/services/milly-backend/milly-backend.service';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-available-services',
  templateUrl: './available-services.component.html',
  styleUrls: ['./available-services.component.css']
})
export class AvailableServicesComponent implements OnInit {

  services: Service[] = [];
  actions: ActionButton[] = [
    {
      displayName: 'Ver',
      codeName: 'see',
      color: ''
    },
    {
      displayName: 'Hacer reservación',
      codeName: 'appointment',
      color: 'primary'
    }
  ]

  constructor(
    private milly: MillyBackendService,
    private router: Router,
    private session: SessionService
  ) { }

  ngOnInit(): void {
    
    this.milly.getServices().subscribe(res => {
      console.log(res)
      this.services = res.data.services
    });
  }

  actionHandler(event: ServiceCardActionEvent) {
    //Aquí se maneja lo que ocurre cuando se presiona un botón de las tarjetas de los servicios.
    console.log(event);

    if(event.actionCodeName == 'appointment') {
      this.session.setService(event.service);
      this.router.navigateByUrl('/bookappointment/'+ event.service.id);
      return;
    }

    alert(`Se presionó la acción: "${event.actionCodeName}" para el servicio: "${event.service.service_name}".`);
  }

}
