import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Contact } from '../models/contact';

@Component({
  selector: 'ac-contact-form',
  template: `
    <button class="w-full !mb-4" mat-stroked-button (click)="closeContactsDialog()">Indietro</button>
    <form #f="ngForm">
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
          <mat-label>IBAN</mat-label>
          <input
            type="text"
            matInput
            ngModel
            name="iban"
            placeholder="Inserisci l'IBAN del destinatario"
            #ibanRef="ngModel"
            required
            pattern="^[a-zA-Z0-9]+$"
            minlength="27"
            maxlength="27"
          />
          <mat-hint align="end"
          >{{ ibanRef.value?.length }} / 27</mat-hint>
          <mat-icon matPrefix>account_balance</mat-icon>
          <mat-error *ngIf="ibanRef.errors?.['minlength']">
          Il codice IBAN deve essere lungo
          {{ibanRef.errors?.['minlength'].requiredLength}} cifre
        </mat-error>
          <mat-error *ngIf="ibanRef.errors?.['pattern']">
          Il codice IBAN non può contenere simboli
          </mat-error>
          <mat-error *ngIf="ibanRef.errors?.['required']">
          Il codice IBAN è obbligatorio
          </mat-error>
        </mat-form-field>
      <button type="button" class="w-full !mt-4" mat-raised-button color="primary" [disabled]="!f.valid" (click)="saveNewContact.emit()">
        Salva
      </button>
    </form>
  `,
  styles: [
  ]
})
export class ContactFormComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  closeContactsDialog() {
    this.dialog.closeAll();
  }

  @Output() saveNewContact = new EventEmitter<Contact>();

}
