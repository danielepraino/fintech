import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ac-sign-in',
  template: `
    <form #f="ngForm">
        <mat-form-field class="w-full" appearance="fill">
          <mat-label>Email</mat-label>
          <input
            matInput
            ngModel
            type="email"
            name="email"
            placeholder="Inserisci la tua email"
            #emailRef="ngModel"
            email
            required
          >
          <mat-icon matPrefix>person</mat-icon>
          <mat-error *ngIf="emailRef.errors?.['email']">
                Non è un formato email valido
          </mat-error>
          <mat-error *ngIf="emailRef.errors?.['required']">
                L'email è obbligatoria
          </mat-error>
        </mat-form-field>
        <mat-form-field class="w-full" appearance="fill">
          <mat-label>Password</mat-label>
          <input
            matInput
            ngModel
            [type]="showPasswordSignin ? 'text' : 'password'"
            name="password"
            placeholder="Inserisci la tua password"
            #passwordRef="ngModel"
            required
          >
          <mat-icon matPrefix>lock</mat-icon>
          <mat-icon matSuffix (click)="showPasswordSignin = !showPasswordSignin">{{ showPasswordSignin ? "visibility" : "visibility_off" }}</mat-icon>
          <mat-error *ngIf="passwordRef.errors?.['required']">
                La password è obbligatoria
          </mat-error>
        </mat-form-field>
        <button class="w-full !my-4" type="button" mat-raised-button color="primary" (click)="signinHandler(f)" (keyup.enter)="signinHandler(f)">Accedi</button>
        <a class="underline cursor-pointer" (click)="show.emit(false)" routerLink="../register">Crea un nuovo account</a>
    </form>
  `,
  styles: [
  ]
})
export class SignInComponent implements OnInit {

  showPasswordSignin: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  signinHandler(form: NgForm) {
    if (!form.invalid) {
      form.reset();
      this.router.navigateByUrl('dashboard');
    }
  }

  @Output() show = new EventEmitter<boolean>();

}
