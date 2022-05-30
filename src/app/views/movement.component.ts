import { Movement } from './../models/movement';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ac-movement',
  template: `
    <mat-accordion>
      <mat-expansion-panel
        class="!mb-4"
        (opened)="panelOpenState = true"
        (closed)="panelOpenState = false"
        *ngFor="let movement of movements"
      >
        <mat-expansion-panel-header>
          <mat-panel-title>
            <span class="mr-4 text-gray-400 text-xs italic">[{{movement.timestamp | date: 'dd/MM/yyyy'}}]</span>
            <span class="mr-4 font-bold" [class]="movement.type == 'in' ? 'text-green-500' : 'text-red-500'">€ {{movement.amount}}</span>
            <span class="mr-4">{{movement.title}}</span>
          </mat-panel-title>
          <mat-panel-description>
            {{movement.description | truncate: 50}}
          </mat-panel-description>
        </mat-expansion-panel-header>
        <p>{{movement.description}}</p>
      </mat-expansion-panel>
    </mat-accordion>
  `,
  styles: [],
})
export class MovementComponent implements OnInit {
  panelOpenState: boolean = false;

  constructor() {}

  ngOnInit(): void {
  }

  @Input() movements: Movement[] = [];

}
