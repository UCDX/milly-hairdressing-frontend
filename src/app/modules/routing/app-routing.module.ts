import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from '../views/landing/landing.component';
import { LoginComponent } from '../views/login/login.component';
import { RegisterComponent } from '../views/register/register.component';
import { RegisterStylistComponent } from '../views/register-stylist/register-stylist.component';
import { AddserviceComponent } from '../views/addservice/addservice.component';
import { AvailableServicesComponent } from '../views/available-services/available-services.component';
import { ListAppointmentsComponent } from '../views/list-appointments/list-appointments.component';
import { ListAppointmentsByDayComponent } from '../views/list-appointments-by-day/list-appointments-by-day.component';
import { BookAppointmentComponent } from '../views/bookappointment/bookappointment.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register_stylist', component: RegisterStylistComponent },
  { path: 'addservice', component: AddserviceComponent },
  { path: 'services', component: AvailableServicesComponent },
  { path: 'list_appointments', component: ListAppointmentsComponent },
  { path: 'list_appointments_by_day', component: ListAppointmentsByDayComponent },
  { path: 'bookappointment', component: BookAppointmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
