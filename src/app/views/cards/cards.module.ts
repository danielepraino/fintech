import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../shared/material/material.module';
import { FormsModule } from '@angular/forms';

import { CardsComponent } from './cards.component';
import { CardFormComponent } from './components/card-form.component';
import { CardListComponent } from './components/card-list.component';
import { CardsRoutingModule } from './cards-routing.module';

@NgModule({
  declarations: [
    CardsComponent,
    CardFormComponent,
    CardListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    CardsRoutingModule
  ],
})
export class CardsModule { }
