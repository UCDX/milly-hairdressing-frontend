import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { TwoFieldFormComponent } from './two-field-form/two-field-form.component';
import { FifthFieldFormComponent } from './fifth-field-form/fifth-field-form.component';
import { RegisterStylistFormComponent } from './register-stylist-form/register-stylist-form.component';
import { ServiceCardComponent } from './service-card/service-card.component';
import { ReservationCardComponent } from './reservation-card/reservation-card.component';


@NgModule({
  declarations: [
    TwoFieldFormComponent,
    FifthFieldFormComponent,
    RegisterStylistFormComponent,
    ServiceCardComponent,
    ReservationCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    TwoFieldFormComponent,
    FifthFieldFormComponent,
    RegisterStylistFormComponent,
    ServiceCardComponent,
    ReservationCardComponent
  ]
})
export class ComponentsModule { }
