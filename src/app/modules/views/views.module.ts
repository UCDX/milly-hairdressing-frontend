import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ComponentsModule } from '../components/components.module';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterStylistComponent } from './register-stylist/register-stylist.component';
import { AddserviceComponent } from './addservice/addservice.component';
import { AvailableServicesComponent } from './available-services/available-services.component';
import { ListAppointmentsComponent } from './list-appointments/list-appointments.component';
import { BookAppointmentComponent } from './bookappointment/bookappointment.component';
import { ListAppointmentsByDayComponent } from './list-appointments-by-day/list-appointments-by-day.component';

@NgModule({
  declarations: [
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    RegisterStylistComponent,
    AddserviceComponent,
    AvailableServicesComponent,
    ListAppointmentsComponent,
    BookAppointmentComponent,
    ListAppointmentsByDayComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule
  ],
  exports: [
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    RegisterStylistComponent,
    AddserviceComponent,
    AvailableServicesComponent,
    BookAppointmentComponent,
    ListAppointmentsByDayComponent
  ]
})
export class ViewsModule { }
