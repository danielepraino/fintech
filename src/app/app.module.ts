import { FilterPipe } from './pipes/filter.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { LoginComponent } from './views/login.component';
import { SignInComponent } from './views/sign-in.component';
import { RegisterComponent } from './views/register.component';
import { CardListComponent } from './views/card-list.component';
import { CardFormComponent } from './views/card-form.component';
import { CardsComponent } from './views/cards.component';
import { MovementComponent } from './views/movement.component';
import { MovementsComponent } from './views/movements.component';
import { TransferComponent } from './views/transfer.component';
import { ContactsComponent } from './views/contacts.component';
import { ContactListComponent } from './views/contact-list.component';
import { ContactFormComponent } from './views/contact-form.component';
import { AppointmentListComponent } from './views/appointment-list.component';
import { AppointmentDateComponent } from './views/appointment-date.component';
import { AppointmentsComponent } from './views/appointments.component';
import { NavmenuComponent } from './views/navmenu.component';

@NgModule({
  declarations: [
    TruncatePipe,
    FilterPipe,
    AppComponent,
    LoginComponent,
    SignInComponent,
    RegisterComponent,
    CardListComponent,
    CardFormComponent,
    CardsComponent,
    MovementComponent,
    MovementsComponent,
    TransferComponent,
    ContactsComponent,
    ContactListComponent,
    ContactFormComponent,
    AppointmentListComponent,
    AppointmentDateComponent,
    AppointmentsComponent,
    NavmenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
