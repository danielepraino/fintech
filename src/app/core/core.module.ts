import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';

import { NavmenuComponent } from './components/navmenu.component';


@NgModule({
  declarations: [
    NavmenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  exports: [
    NavmenuComponent
  ]
})
export class CoreModule { }
