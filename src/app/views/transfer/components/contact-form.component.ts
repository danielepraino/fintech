import { NgForm } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'ac-contact-form',
  template: `
    <form #f="ngForm">
      <mat-form-field class="w-full" appearance="fill">
        <mat-label>Nome</mat-label>
        <input
          type="text"
          matInput
          [ngModel]="selectedContact?.name"
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
          [ngModel]="selectedContact?.surname"
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
            [ngModel]="selectedContact?.iban"
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
      <button type="button" class="w-full !mt-4" mat-raised-button color="primary" [disabled]="!f.valid" (click)="contactSubmitHandler.emit(f)">
        {{ selectedContact.iban ? 'Modifica' : 'Salva' }}
      </button>
    </form>
  `,
  styles: [
  ]
})
export class ContactFormComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {}

  @Input() selectedContact: any;
  @Output() contactSubmitHandler = new EventEmitter<NgForm>();

}
