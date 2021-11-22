import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Service } from 'src/app/lib/milly-data-clases';
import { ActionButton } from 'src/app/lib/component-clases';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent implements OnInit {

  @Input() service: Service= new Service;
  @Input() actions: ActionButton[] = [];
  @Output() action: EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  optionHandler(codeName: string) {
    let event: ServiceCardActionEvent = {
      actionCodeName: codeName,
      service: this.service
    };

    this.action.emit(event);
  }

}

export class ServiceCardActionEvent {
  actionCodeName: string = '';
  service: Service = new Service;
}
