import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { TwoFieldFormComponent } from './two-field-form/two-field-form.component';
import { FifthFieldFormComponent } from './fifth-field-form/fifth-field-form.component';
import { FifthFieldFormServiceComponent } from './fifth-field-form-service/fifth-field-form-service.component';


@NgModule({
  declarations: [
    TwoFieldFormComponent,
    FifthFieldFormComponent,
    FifthFieldFormServiceComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    TwoFieldFormComponent,
    FifthFieldFormComponent,
    FifthFieldFormServiceComponent
  ]
})
export class ComponentsModule { }
