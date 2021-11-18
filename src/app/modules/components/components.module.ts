import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { TwoFieldFormComponent } from './two-field-form/two-field-form.component';
import { FifthFieldFormComponent } from './fifth-field-form/fifth-field-form.component';
import { RegisterStylistFormComponent } from './register-stylist-form/register-stylist-form.component';


@NgModule({
  declarations: [
    TwoFieldFormComponent,
    FifthFieldFormComponent,
    RegisterStylistFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    TwoFieldFormComponent,
    FifthFieldFormComponent,
    RegisterStylistFormComponent
  ]
})
export class ComponentsModule { }
