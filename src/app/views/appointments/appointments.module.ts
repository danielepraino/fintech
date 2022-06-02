import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../shared/material/material.module';
import { FormsModule } from '@angular/forms';

import { AppointmentsComponent } from './appointments.component';
import { AppointmentListComponent } from './components/appointment-list.component';
import { AppointmentDateComponent } from './components/appointment-date.component';
import { AppointmentsRoutingModule } from './appointments-routing.module';

@NgModule({
  declarations: [
    AppointmentDateComponent,
    AppointmentListComponent,
    AppointmentsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    AppointmentsRoutingModule
  ],
})
export class AppointmentsModule { }
