import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-login',
  template: `
  <mat-card class="mt-24 md:w-1/3 mx-auto">
    <router-outlet></router-outlet>
  </mat-card>
  `,
  styles: [
  ]
})

export class LoginComponent implements OnInit {

  showSignin: boolean = true;

  constructor() { }

  ngOnInit(): void {
    console.log("showSignin", this.showSignin);
  }

}
