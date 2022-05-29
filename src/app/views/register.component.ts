import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ac-register',
  template: `
    <form #f="ngForm">
      <mat-form-field class="w-full" appearance="fill">
        <mat-label>Email</mat-label>
        <input
          matInput
          ngModel
          type="email"
          name="emailRegister"
          placeholder="Inserisci la tua email"
          #emailRegisterRef="ngModel"
          email
          required
        />
        <mat-icon matPrefix>person</mat-icon>
        <mat-error *ngIf="emailRegisterRef.errors?.['email']">
          Non è un formato email valido
        </mat-error>
        <mat-error *ngIf="emailRegisterRef.errors?.['required']">
          L'email è obbligatoria
        </mat-error>
      </mat-form-field>
      <mat-form-field class="w-full" appearance="fill">
        <mat-label>Nome</mat-label>
        <input
          type="text"
          matInput
          ngModel
          name="name"
          placeholder="Inserisci il tuo nome"
          #nameRef="ngModel"
          required
          pattern="^[A-Za-z]+$"
          maxlength="40"
        />
        <mat-error *ngIf="nameRef.errors?.['pattern']">
          Il nome deve essere composto da sole lettere
        </mat-error>
        <mat-error *ngIf="nameRef.errors?.['required']">
          Il nome è obbligatorio
        </mat-error>
      </mat-form-field>
      <mat-form-field class="w-full" appearance="fill">
        <mat-label>Cognome</mat-label>
        <input
          type="text"
          matInput
          ngModel
          name="surname"
          placeholder="Inserisci il tuo cognome"
          #surnameRef="ngModel"
          required
          pattern="^[A-Za-z]+$"
          maxlength="40"
        />
        <mat-error *ngIf="surnameRef.errors?.['pattern']">
          Il cognome deve essere composto da sole lettere
        </mat-error>
        <mat-error *ngIf="surnameRef.errors?.['required']">
          Il cognome è obbligatorio
        </mat-error>
      </mat-form-field>
      <mat-form-field class="w-full" appearance="fill">
        <mat-label>Password</mat-label>
        <input
          matInput
          ngModel
          [type]="showPasswordRegister ? 'text' : 'password'"
          name="passwordRegister"
          placeholder="Inserisci la tua password"
          #passwordRegisterRef="ngModel"
          minlength="8"
          maxlength="20"
          required
        />
        <mat-hint align="end"
          >{{ passwordRegisterRef.value?.length }} / 20</mat-hint
        >
        <mat-icon matPrefix>lock</mat-icon>
        <mat-icon
          matSuffix
          (click)="showPasswordRegister = !showPasswordRegister"
          >{{
            showPasswordRegister ? 'visibility' : 'visibility_off'
          }}</mat-icon
        >
        <mat-error *ngIf="passwordRegisterRef.errors?.['minlength']">
          La password deve essere di minimo
          {{passwordRegisterRef.errors?.['minlength'].requiredLength}} caratteri
        </mat-error>
        <mat-error *ngIf="passwordRegisterRef.errors?.['required']">
          La password è obbligatioria
        </mat-error>
      </mat-form-field>
      <mat-form-field class="w-full" appearance="fill">
        <mat-label>Ripeti la password</mat-label>
        <input
          matInput
          ngModel
          [type]="showPasswordRegisterRepeat ? 'text' : 'password'"
          name="passwordRegisterRepeat"
          placeholder="Inserisci la tua password"
          #passwordRegisterRepeat="ngModel"
          minlength="8"
          maxlength="20"
          required
        />
        <mat-hint align="end"
          >{{ passwordRegisterRepeat.value?.length }} / 20</mat-hint
        >
        <mat-icon matPrefix>lock</mat-icon>
        <mat-icon
          matSuffix
          (click)="showPasswordRegisterRepeat = !showPasswordRegisterRepeat"
          >{{
            showPasswordRegisterRepeat ? 'visibility' : 'visibility_off'
          }}</mat-icon
        >
        <mat-error *ngIf="passwordRegisterRepeat.errors?.['minlength']">
          La password deve essere di minimo
          {{passwordRegisterRepeat.errors?.['minlength'].requiredLength}}
          caratteri
        </mat-error>
        <mat-error *ngIf="passwordRegisterRepeat.errors?.['required']">
          La password è obbligatioria
        </mat-error>
      </mat-form-field>
      <button type="submit" class="w-full" mat-raised-button color="primary">
        Registrati
      </button>
      <a class="a-link" (click)="show.emit(true)">Hai già un account? Accedi</a>
    </form>
  `,
  styles: [],
})
export class RegisterComponent implements OnInit {
  showPasswordRegister: boolean = false;
  showPasswordRegisterRepeat: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  @Output() show = new EventEmitter<boolean>();
}
