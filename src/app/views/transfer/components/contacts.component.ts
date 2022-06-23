import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactsService } from './../../../api/contacts.service';
import { Contact } from 'src/app/models/contact';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-contacts',
  template: `
    <mat-dialog-content>
      <ng-container *ngIf="showContactList">
        <ac-contact-list
          [contacts]="contacts"
          (selectContactFromList)="selectContactFromList($event)"
          (selectContactForEditing)="selectContactForEditing($event)"
          (deleteContact)="deleteContact($event)"
        ></ac-contact-list>
        <button
          class="w-full !mt-4"
          mat-raised-button
          color="primary"
          (click)="newContact()"
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
          [selectedContact]="selectedContact"
          (contactSubmitHandler)="contactSubmitHandler($event)"
        ></ac-contact-form>
      </ng-container>
    </mat-dialog-content>
  `,
  styles: [],
})
export class ContactsComponent implements OnInit {

  showContactList: boolean = true;
  isNewContact: boolean | null = null;

  contacts: Contact[] = [];
  selectedContact: Contact[] = [];
  selectedContactId: string | null = null;
  contactFromList: Contact[] = [];

  constructor(private contactsService: ContactsService, private snackBar: MatSnackBar, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.contactsService.getContacts().subscribe(res => {
      this.contacts = res;
    });
  }

  selectContactFromList(contact: any) {
    this.dialog.closeAll();
    this.contactFromList = contact;
  }

  addContact(contactData: any) {
    this.contactsService.addContact(contactData).subscribe((res: any) => {
      this.contacts = [...this.contacts, res];
      this.snackBar.open('Contatto aggiunto', 'SUCCESS', { duration: 2500, panelClass: ['text-green-400'] });
    });
  }

  newContact() {
    this.showContactList = false;
    this.isNewContact = true;
  }

  selectContactForEditing(contactForm: any) {
    this.showContactList = false;
    this.isNewContact = false;
    this.selectedContact = contactForm;
    this.selectedContactId = contactForm._id;
  }

  editContact(selectedContact: any, selectedContactId: any) {
    this.contactsService.updateContact(selectedContactId, selectedContact).subscribe((res: any) => {
      const index = this.contacts.findIndex(contactIndex => contactIndex._id === selectedContactId);
      this.contacts[index] = res;
      this.selectedContact = [];
      this.snackBar.open('Contatto modificato', 'SUCCESS', { duration: 2500, panelClass: ['text-green-400'] });

    });
  }

  deleteContact(contactId: string) {
    this.contactsService.deleteContact(contactId).subscribe((res: any) => {
      if (res) {
        this.contacts = this.contacts.filter((contact) => contact._id != contactId);
        this.snackBar.open('Contatto cancellato', 'SUCCESS', { duration: 2500, panelClass: ['text-green-400'] });
      } else {
        this.snackBar.open('Impossibile cancellare il contatto', 'ERROR', { duration: 2500, panelClass: ['text-red-400'] });
      }
    });
  }

  contactSubmitHandler(form: any) {
    if (!form.invalid) {
      if(this.isNewContact) {
        this.addContact(form.value);
      } else {
        this.selectedContact = form.value;
        this.editContact(this.selectedContact, this.selectedContactId);
      }
      this.showContactList = true;
      form.reset();
    }
  }
}
