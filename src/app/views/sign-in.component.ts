import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

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
            minlength="8"
            maxlength="20"
            required
          >
          <mat-hint align="end">{{passwordRef.value?.length}} / 20</mat-hint>
          <mat-icon matPrefix>lock</mat-icon>
          <mat-icon matSuffix (click)="showPasswordSignin = !showPasswordSignin">{{ showPasswordSignin ? "visibility" : "visibility_off" }}</mat-icon>
          <mat-error *ngIf="passwordRef.errors?.['minlength']">
                La password deve essere di minimo {{passwordRef.errors?.['minlength'].requiredLength}} caratteri
          </mat-error>
          <mat-error *ngIf="passwordRef.errors?.['required']">
                La password è obbligatoria
          </mat-error>
        </mat-form-field>
        <button class="w-full !my-4" type="button" mat-raised-button color="primary">Accedi</button>
        <a class="underline cursor-pointer" (click)="show.emit(false)">Crea un nuovo account</a>
    </form>
  `,
  styles: [
  ]
})
export class SignInComponent implements OnInit {

  showPasswordSignin: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  @Output() show = new EventEmitter<boolean>();
  //@Output() submitHandler = new EventEmitter<any>();

}
