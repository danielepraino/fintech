import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './../../pipes/truncate.pipe';
import { MaterialModule } from './../../shared/material/material.module';

import { MovementComponent } from './components/movement.component';
import { MovementsComponent } from './movements.component';
import { MovementsRoutingModule } from './movements-routing.module';

@NgModule({
  declarations: [
    MovementComponent,
    MovementsComponent,
    TruncatePipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MovementsRoutingModule
  ],
})
export class MovementsModule { }
