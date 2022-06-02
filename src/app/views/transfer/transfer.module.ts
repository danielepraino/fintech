import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './../../pipes/filter.pipe';

import { TransferComponent } from './transfer.component';
import { ContactFormComponent } from './components/contact-form.component';
import { ContactListComponent } from './components/contact-list.component';
import { ContactsComponent } from './components/contacts.component';
import { TransferRoutingModule } from './transfer-routing.module';


@NgModule({
  declarations: [
    TransferComponent,
    ContactFormComponent,
    ContactListComponent,
    ContactsComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    TransferRoutingModule
  ],
})
export class TransferModule { }
