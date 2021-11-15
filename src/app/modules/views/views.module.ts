import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ComponentsModule } from '../components/components.module';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    LandingComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule
  ],
  exports: [
    LandingComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class ViewsModule { }
