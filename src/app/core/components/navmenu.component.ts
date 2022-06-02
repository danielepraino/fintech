import { NavLink } from 'src/app/models/nav-link';
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
            <mat-list-item class="hover:bg-gray-100 !h-14 cursor-pointer" *ngFor="let navLink of navLinks" [routerLink]="navLink.link" [routerLinkActive]="['bg-blue-400']" [routerLinkActiveOptions]="{exact: true}">
              <mat-icon class="mr-4">{{navLink.icon}}</mat-icon>
              <span class="font-medium">{{navLink.name}}</span>
            </mat-list-item>
            <mat-list-item class="hover:bg-gray-100 !h-14 cursor-pointer mt-10" (click)="logout()">
              <mat-icon class="mr-4">person</mat-icon>
              <div class="flex flex-col">
                <span class="text-sm font-medium">Nome Cognome</span>
                <span class="text-xs font-medium">Logout</span>
              </div>
            </mat-list-item>
          </mat-list>
        </mat-sidenav>
        <mat-sidenav-content class="w-5/6 !h-screen !ml-auto">
          <div class="p-8">
            <router-outlet></router-outlet>
          </div>
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
      link: 'dashboard'
    },
    {
      name: 'Carte',
      icon: 'credit_card',
      link: 'dashboard/cards'
    },
    {
      name: 'Movimenti',
      icon: 'receipt_long',
      link: 'dashboard/movements'
    },
    {
      name: 'Trasferisci',
      icon: 'paid',
      link: 'dashboard/transfer'
    },
    {
      name: 'Appuntamenti',
      icon: 'event',
      link: 'dashboard/appointments'
    },
    {
      name: 'Tasse',
      icon: 'summarize',
      link: 'dashboard/taxes'
    },
  ]

  constructor() {}

  ngOnInit(): void {}

  logout() {
    console.log("Logout!");
  }
}
