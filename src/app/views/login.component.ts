import { Component, OnInit, OnChanges, SimpleChanges, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ac-login',
  template: `
  <mat-card class="login-container">
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
      form.resetForm();
    }
  }

}
