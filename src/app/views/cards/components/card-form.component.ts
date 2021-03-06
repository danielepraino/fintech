import { NgForm } from '@angular/forms';
import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'ac-card-form',
  template: `
    <mat-card class="w-full">
      <form #cardForm="ngForm">
        <mat-form-field class="w-full" appearance="fill">
          <mat-label>Tipo di carta</mat-label>
          <mat-select name="type" ngModel #cardTypeRef="ngModel" required>
            <mat-option
              *ngFor="let cardType of cardTypes"
              [value]="cardType.type.toLowerCase()"
            >
              {{ cardType.type }}
            </mat-option>
          </mat-select>
          <mat-error *ngIf="cardTypeRef.errors?.['required']">
            Il tipo di carta è obbligatorio
          </mat-error>
        </mat-form-field>
        <div class="flex flex-wrap justify-between">
          <mat-form-field class="w-full lg:w-1/2 lg:pr-1" appearance="fill">
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
          <mat-form-field class="w-full lg:w-1/2 lg:pl-1" appearance="fill">
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
            name="number"
            placeholder="Inserisci le cifre della tua carta"
            #numberRef="ngModel"
            required
            pattern="^[0-9]*$"
            minlength="16"
            maxlength="16"
          />
          <mat-hint align="end">{{ numberRef.value?.length }} / 16</mat-hint>
          <mat-icon matPrefix>credit_card</mat-icon>
          <mat-error *ngIf="numberRef.errors?.['minlength']">
            Il numero carta deve essere lungo
            {{numberRef.errors?.['minlength'].requiredLength}} cifre
          </mat-error>
          <mat-error *ngIf="numberRef.errors?.['pattern']">
            Il numero carta deve essere composto da soli numeri
          </mat-error>
          <mat-error *ngIf="numberRef.errors?.['required']">
            Il numero carta è obbligatorio
          </mat-error>
        </mat-form-field>
        <mat-form-field class="w-full" appearance="fill">
          <mat-label>Codice di sicurezza</mat-label>
          <input
            matInput
            ngModel
            [type]="showSecureCode ? 'text' : 'password'"
            name="csc"
            placeholder="Inserisci le 3 cifre del codice di sicurezza"
            #cscRef="ngModel"
            pattern="^[0-9]*$"
            minlength="3"
            maxlength="3"
            required
          />
          <mat-hint align="end">{{ cscRef.value?.length }} / 3</mat-hint>
          <mat-icon matPrefix>lock</mat-icon>
          <mat-icon matSuffix (click)="showSecureCode = !showSecureCode">{{
            showSecureCode ? 'visibility' : 'visibility_off'
          }}</mat-icon>
          <mat-error *ngIf="cscRef.errors?.['minlength']">
            Il codice di sicurezza deve essere lunga
            {{cscRef.errors?.['minlength'].requiredLength}} cifre
          </mat-error>
          <mat-error *ngIf="cscRef.errors?.['pattern']">
          Il codice di sicurezza deve essere composto da soli numeri
          </mat-error>
          <mat-error *ngIf="cscRef.errors?.['required']">
            Il codice di sicurezza è obbligatorio
          </mat-error>
        </mat-form-field>
        <button
          type="button"
          class="w-full !mt-4"
          mat-raised-button
          color="primary"
          (click)="cardSubmitHandler.emit(cardForm)"
        >
          Aggiungi carta
        </button>
      </form>
      <button
        class="w-full !mt-4"
        mat-stroked-button
        color="warn"
        (click)="closeAddCard.emit(true)"
      >
        Annulla
      </button>
    </mat-card>
  `,
  styles: [],
})
export class CardFormComponent implements OnInit {

  @ViewChild('cardForm') cardForm!: NgForm;

  showSecureCode: boolean = false;
  cardTypes = [{ type: 'Visa' }, { type: 'Mastercard' }];

  constructor() {}

  ngOnInit(): void {}

  public cleanup() {
    this.cardForm.form.reset();
  }

  @Output() cardSubmitHandler = new EventEmitter<NgForm>();
  @Output() closeAddCard = new EventEmitter<any>();
}
