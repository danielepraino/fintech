import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-card-form',
  template: `
  <mat-card class="login-container">
    <form #f="ngForm">
      <!-- <mat-form-field class="w-full" appearance="fill">
        <mat-label>Favorite food</mat-label>
        <mat-select>
          <mat-option *ngFor="let food of foods" [value]="food.value">
            {{food.viewValue}}
          </mat-option>
        </mat-select>
      </mat-form-field> -->
      <div class="d-flex justify-content-between">
        <mat-form-field class="w-50" appearance="fill">
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
        <mat-form-field class="w-50" appearance="fill">
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
      </div>
      <mat-form-field class="w-full" appearance="fill">
          <mat-label>N° Carta</mat-label>
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
        <mat-label>Codice di sicurezza</mat-label>
        <input
          matInput
          ngModel
          [type]="showSecureCode ? 'text' : 'password'"
          name="secureCode"
          placeholder="Inserisci la tua password"
          #secureCodeRef="ngModel"
          minlength="3"
          maxlength="3"
          required
        />
        <mat-hint align="end"
          >{{ secureCodeRef.value?.length }} / 3</mat-hint
        >
        <mat-icon matPrefix>lock</mat-icon>
        <mat-icon
          matSuffix
          (click)="showSecureCode = !showSecureCode"
          >{{
            showSecureCode ? 'visibility' : 'visibility_off'
          }}</mat-icon
        >
        <mat-error *ngIf="secureCodeRef.errors?.['minlength']">
          La password deve essere di minimo
          {{secureCodeRef.errors?.['minlength'].requiredLength}} caratteri
        </mat-error>
        <mat-error *ngIf="secureCodeRef.errors?.['required']">
          La password è obbligatioria
        </mat-error>
      </mat-form-field>
      <button type="submit" class="w-full" mat-raised-button color="primary">
        Aggiungi carta
      </button>
      <button class="w-full" mat-stroked-button color="warn">Annulla</button>
    </form>
  </mat-card>
  `,
  styles: [
  ]
})
export class CardFormComponent implements OnInit {

  showSecureCode: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
