import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/lib/milly-data-clases';
import { ActionButton } from 'src/app/lib/component-clases';
import { ServiceCardActionEvent } from '../../components/service-card/service-card.component';

@Component({
  selector: 'app-available-services',
  templateUrl: './available-services.component.html',
  styleUrls: ['./available-services.component.css']
})
export class AvailableServicesComponent implements OnInit {

  services: Service[] | null = null;
  actions: ActionButton[] = [
    {
      displayName: 'Editar',
      codeName: 'edit',
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
    this.services = [
      {
        service_name: 'Corte de cabello',
        service_description: 'Corte de cabello.',
        service_duration: 1,
        short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices est nec arcu rutrum volutpat. Curabitur lobortis lacus ligula, sit amet commodo ipsum blandit at. Proin ut bibendum nisl. Mauris ac tincidunt purus, at placerat ligula.',
        id: 1,
        is_active: 1,
        cost: 100
      },
      {
        service_name: 'Alaciado',
        service_description: 'Alaciado.',
        service_duration: 2,
        short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices est nec arcu rutrum volutpat. Curabitur lobortis lacus ligula, sit amet commodo ipsum blandit at. Proin ut bibendum nisl. Mauris ac tincidunt purus, at placerat ligula.',
        id: 2,
        is_active: 1,
        cost: 150
      }
    ]
  }

  actionHandler(event: ServiceCardActionEvent) {
    //Aquí se maneja lo que ocurre cuando se presiona un botón de las tarjetas de los servicios.
    console.log(event);
    alert(`Se precionó la acción: "${event.actionCodeName}" para el servicio: "${event.service.service_name}".`);
  }

}
