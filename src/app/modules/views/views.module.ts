import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ComponentsModule } from '../components/components.module';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddserviceComponent } from './addservice/addservice.component';


@NgModule({
  declarations: [
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    AddserviceComponent
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
    AddserviceComponent
  ]
})
export class ViewsModule { }
