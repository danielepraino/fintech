import { Location } from '../models/location';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-appointments',
  template: `
    <mat-sidenav-container>
      <mat-sidenav class="w-1/3" #sidenav mode="side" position="end">
        <ac-appointment-date></ac-appointment-date>
      </mat-sidenav>
      <mat-sidenav-content class="min-h-screen">
        <ac-appointment-list
          [locations]="locations"
          (showNav)="sidenav.toggle()"
        ></ac-appointment-list>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [],
})
export class AppointmentsComponent implements OnInit {

  locations: Location[] = [
    {
      _id: 'idLoc1',
      name: 'Sede1',
      address: 'Via Massena, Torino',
      phone: '011123123123',
      email: 'sede1@gmail.com',
      coords: [45.03297, 7.40156],
    },
    {
      _id: 'idLoc2',
      name: 'Sede2',
      address: 'Via Lomellina, Torino',
      phone: '011456456456',
      email: 'sede2@gmail.com',
      coords: [45.067608, 7.718078],
    },
  ]

  constructor() {}

  ngOnInit(): void {}
}
