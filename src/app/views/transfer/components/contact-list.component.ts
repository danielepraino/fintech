import { Contact } from 'src/app/models/contact';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ac-contact-list',
  template: `
    <mat-form-field class="w-full" appearance="outline" color="primary">
      <mat-label>Cerca</mat-label>
      <input
        matInput
        placeholder="Cerca un contatto"
        [(ngModel)]="searchContact"
      />
      <mat-icon matPrefix>search</mat-icon>
      <button
        *ngIf="searchContact"
        matSuffix
        mat-icon-button
        aria-label="Clear"
        (click)="searchContact = ''"
      >
        <mat-icon>close</mat-icon>
      </button>
    </mat-form-field>
    <div>
      <h3 class="text-gray-500">Contatti</h3>
      <div
        class="flex justify-between items-center"
        *ngFor="let contact of contacts | filter: searchContact"
      >
        <div class="flex items-center">
          <mat-icon class="text-gray-500 mr-4" matSuffix
            >account_circle</mat-icon
          >
          <div>
            <div>{{ contact.name }} {{ contact.surname }}</div>
            <div>{{ contact.iban }}</div>
          </div>
        </div>
        <div>
          <mat-icon
            class="mr-4"
            matSuffix
            matTooltip="Seleziona"
            matTooltipPosition="below"
            (click)="selectContact.emit(contact)"
          >
            done
          </mat-icon>
          <mat-icon
            class="mr-4"
            matSuffix
            matTooltip="Modifica"
            matTooltipPosition="below"
            (click)="editContact.emit(contact)"
          >
            edit
          </mat-icon>
          <mat-icon
            matSuffix
            matTooltip="Rimuovi"
            matTooltipPosition="below"
            (click)="removeContact.emit(contact._id)"
          >
            delete
          </mat-icon>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class ContactListComponent implements OnInit {

  searchContact = '';

  constructor() {}

  ngOnInit(): void {
  }

  @Input() contacts: Contact[] = [];
  @Output() selectContact = new EventEmitter<any>();
  @Output() editContact = new EventEmitter<any>();
  @Output() removeContact = new EventEmitter<any>();
}
