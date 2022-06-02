import { Contact } from 'src/app/models/contact';
import { MatDialog } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-contacts',
  template: `
    <mat-dialog-content>
      <ng-container *ngIf="showContactList">
        <ac-contact-list
          [contacts]="contacts"
          (selectContact)="selectContact($event)"
          (editContact)="editContact($event)"
          (removeContact)="removeContact($event)"
        ></ac-contact-list>
        <button
          class="w-full !mt-4"
          mat-raised-button
          color="primary"
          (click)="showContactList = false"
        >
          Nuovo contatto
        </button>
      </ng-container>
      <ng-container *ngIf="!showContactList">
        <button
          class="w-full !mb-4"
          mat-stroked-button
          (click)="showContactList = true"
        >
          Indietro
        </button>
        <ac-contact-form
          [editSelectedContact]="editSelectedContact"
          (saveNewContact)="saveNewContact($event)"
        ></ac-contact-form>
      </ng-container>
    </mat-dialog-content>
  `,
  styles: [],
})
export class ContactsComponent implements OnInit {

  showContactList: boolean = true;

  editSelectedContact: Contact[] = [];

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
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  selectContact(selectedContact: Contact) {
    console.log('selectContact', selectedContact);
  }

  editContact(selectedContact: Contact) {
    this.showContactList = false;
    this.editSelectedContact = [];
    return (this.editSelectedContact = [
      ...this.editSelectedContact,
      selectedContact,
    ]);
  }

  removeContact(selectedContactId: any) {
    this.contacts = this.contacts.filter(
      (contact) => contact._id != selectedContactId
    );
  }

  saveNewContact(form: NgForm) {
    if (!form.invalid) {
      this.contacts = [...this.contacts, form.value];
      console.log(form.value);
      form.reset();
    }
  }
}
