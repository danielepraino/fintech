import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ac-login',
  template: `
  <mat-card class="w-1/3 mx-auto">
    <ac-sign-in *ngIf="showSignin" (show)="showSignin = $event"></ac-sign-in>
    <ac-register *ngIf="!showSignin" (show)="showSignin = $event"></ac-register>
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

  submitHandler(form: NgForm) {
    if (!form.invalid) {
      console.log(form.value);
      form.reset();
    }
  }

}
