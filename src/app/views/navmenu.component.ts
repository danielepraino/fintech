import { NavLink } from '../models/nav-link';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-navmenu',
  template: `
    <div class="h-screen">
      <mat-toolbar class="!p-0">
        <div class="flex items-center w-1/6 h-full pl-4">Menu</div>
        <div class="flex items-center w-5/6 h-full text-white bg-blue-800 pl-4">NgFintech</div>
      </mat-toolbar>
      <mat-sidenav-container>
        <mat-sidenav class="w-1/6" mode="side" opened>
          <mat-list class="!pt-0">
            <mat-list-item class="hover:bg-gray-100 !h-14 cursor-pointer" *ngFor="let navLink of navLinks">
              <mat-icon class="mr-4">{{navLink.icon}}</mat-icon>
              <span class="font-medium">{{navLink.name}}</span>
            </mat-list-item>
            <mat-list-item class="hover:bg-gray-100 !h-14 cursor-pointer" (click)="logout()">
              <mat-icon class="mr-4">person</mat-icon>
              <div class="flex flex-col">
                <span class="text-sm font-medium">Nome Cognome</span>
                <span class="text-xs font-medium">Logout</span>
              </div>
            </mat-list-item>
          </mat-list>
        </mat-sidenav>
        <mat-sidenav-content class="w-5/6 !h-screen !ml-auto">
          Main content
        </mat-sidenav-content>
      </mat-sidenav-container>
    </div>
  `,
  styles: [],
})
export class NavmenuComponent implements OnInit {

  navLinks : NavLink[] = [
    {
      name: 'Home',
      icon: 'home',
    },
    {
      name: 'Carte',
      icon: 'credit_card',
    },
    {
      name: 'Movimenti',
      icon: 'receipt_long',
    },
    {
      name: 'Trasferisci',
      icon: 'paid',
    },
    {
      name: 'Appuntamenti',
      icon: 'event',
    },
    {
      name: 'Tasse',
      icon: 'summarize',
    },
  ]

  constructor() {}

  ngOnInit(): void {}

  logout() {
    console.log("Logout!");
  }
}
