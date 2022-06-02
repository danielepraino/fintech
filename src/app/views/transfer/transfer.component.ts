import { Contact } from 'src/app/models/contact';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactsComponent } from './components/contacts.component';

@Component({
  selector: 'ac-transfer',
  template: `
  <mat-card class="w-full">
    <button class="w-full !mb-4" mat-stroked-button (click)="openContactsDialog()">Lista contatti</button>
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
        <mat-form-field class="w-full" appearance="fill">
          <mat-label>Importo</mat-label>
          <input
            type="number"
            matInput
            ngModel
            name="cardCode"
            placeholder="Inserisci l'importo da trasferire"
            #cardCodeRef="ngModel"
            required
            pattern="^[0-9]*$"
            maxlength="9"
          />
          <mat-icon matPrefix>euro</mat-icon>
          <mat-error *ngIf="cardCodeRef.errors?.['minlength']">
          L'importo può avere lunghezza massima di
          {{cardCodeRef.errors?.['minlength'].requiredLength}} cifre
        </mat-error>
          <mat-error *ngIf="cardCodeRef.errors?.['pattern']">
            L'importo deve essere composto da soli numeri
          </mat-error>
          <mat-error *ngIf="cardCodeRef.errors?.['required']">
            Il numero carta è obbligatorio
          </mat-error>
        </mat-form-field>
      <mat-form-field class="w-full" appearance="fill">
        <mat-label>Seleziona una carta</mat-label>
        <mat-icon matPrefix>credit_card</mat-icon>
        <mat-select name="type" ngModel #contactSelectRef="ngModel" required>
          <mat-option *ngFor="let contact of contacts" [value]="contact._id">
            {{contact.iban}}
          </mat-option>
        </mat-select>
        <mat-error *ngIf="contactSelectRef.errors?.['required']">
            Il tipo di carta è obbligatorio
        </mat-error>
      </mat-form-field>
      <button type="button" class="w-full !mt-4" mat-raised-button color="primary" [disabled]="!f.valid">
        Trasferisci denaro
      </button>
    </form>
  </mat-card>
  `,
  styles: [
  ]
})
export class TransferComponent implements OnInit {

  contacts: Contact[] = [
    {
      _id: 'id123',
      name: 'Mario',
      surname: 'Rossi',
      iban: 'IT241241241412412412',
    },
    {
      _id: 'id456',
      name: 'Luigi',
      surname: 'Bianchi',
      iban: 'IT56756776576575756',
    },
  ]

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openContactsDialog() {
    this.dialog.open(ContactsComponent, {
      width: '500px',
    });
  }

}
