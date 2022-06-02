import { Location } from 'src/app/models/location';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ac-appointment-list',
  template: `
    <mat-card class="w-full">
      <h3>Sedi</h3>
      <div
        *ngFor="let location of locations"
        class="flex justify-between items-center hover:bg-gray-200 p-4 cursor-pointer"
        (click)="showNav.emit(true)"
      >
        <div class="flex items-center my-1">
          <mat-icon matPrefix class="text-gray-400 mr-4">domain</mat-icon>
          <div>
            <div>{{ location.name }}</div>
            <div>{{ location.address }}</div>
          </div>
        </div>
      </div>
    </mat-card>
  `,
  styles: [],
})
export class AppointmentListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() locations: Location[] = [];
  @Output() showNav = new EventEmitter<any>();
}
