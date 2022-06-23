import { MatSnackBar } from '@angular/material/snack-bar';
import { TransferService } from './../../api/transfer.service';
import { CardsService } from './../../api/cards.service';
import { Card } from 'src/app/models/card';
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
            name="amount"
            placeholder="Inserisci l'importo da trasferire"
            #amountRef="ngModel"
            required
            pattern="^[0-9]*$"
          />
          <mat-icon matPrefix>euro</mat-icon>
          <mat-error *ngIf="amountRef.errors?.['pattern']">
            L'importo deve essere composto da soli numeri
          </mat-error>
          <mat-error *ngIf="amountRef.errors?.['required']">
          L'importo è obbligatorio
          </mat-error>
        </mat-form-field>
      <mat-form-field class="w-full" appearance="fill">
        <mat-label>Seleziona una carta</mat-label>
        <mat-icon matPrefix>credit_card</mat-icon>
        <mat-select name="type" ngModel #contactSelectRef="ngModel" required>
          <mat-option *ngFor="let card of cards" [value]="card._id">
            {{card. number}}
          </mat-option>
        </mat-select>
        <mat-error *ngIf="contactSelectRef.errors?.['required']">
            Devi selezionare una carta
        </mat-error>
      </mat-form-field>
      <button type="button" class="w-full !mt-4" mat-raised-button color="primary" [disabled]="!f.valid" (click)="transferSubmitHandler(f)">
        Trasferisci denaro
      </button>
    </form>
  </mat-card>
  `,
  styles: [
  ]
})
export class TransferComponent implements OnInit {

  cards: Card[] = [];

  constructor(private cardsService: CardsService, private transferService: TransferService, public dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cardsService.getCards().subscribe(res => {
      this.cards = res;
    });
  }

  openContactsDialog() {
    this.dialog.open(ContactsComponent, {
      width: '500px',
    });
  }

  transfer(transferForm: any) {
    this.transferService.postTransfer(transferForm).subscribe((res: any) => {
      this.snackBar.open('Trasferimento avvenuto', 'SUCCESS', { duration: 2500, panelClass: ['text-green-400'] });
    });
  }

  transferSubmitHandler(form: any) {
    if (!form.invalid) {
      this.transfer(form.value);
      form.reset();
    }
  }

}
