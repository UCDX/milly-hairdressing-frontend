import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { TwoFieldFormComponent } from './two-field-form/two-field-form.component';
import { FifthFieldFormComponent } from './fifth-field-form/fifth-field-form.component';
import { TwoFieldFormServiceComponent } from './two-field-form-service/two-field-form-service.component';


@NgModule({
  declarations: [
    TwoFieldFormComponent,
    FifthFieldFormComponent,
    TwoFieldFormServiceComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    TwoFieldFormComponent,
    FifthFieldFormComponent,
    TwoFieldFormServiceComponent
  ]
})
export class ComponentsModule { }
