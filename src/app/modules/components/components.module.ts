import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { TwoFieldFormComponent } from './two-field-form/two-field-form.component';
import { FifthFieldFormComponent } from './fifth-field-form/fifth-field-form.component';
import { RegisterStylistFormComponent } from './register-stylist-form/register-stylist-form.component';
import { ServiceCardComponent } from './service-card/service-card.component';
import { ReservationCardComponent } from './reservation-card/reservation-card.component';
import { DatePickerFormComponent } from './date-picker-form/date-picker-form.component';

@NgModule({
  declarations: [
    TwoFieldFormComponent,
    FifthFieldFormComponent,
    RegisterStylistFormComponent,
    ServiceCardComponent,
    ReservationCardComponent,
    DatePickerFormComponent
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
    ReservationCardComponent,
    DatePickerFormComponent
  ]
})
export class ComponentsModule { }
