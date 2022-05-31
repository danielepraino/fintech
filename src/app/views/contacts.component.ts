import { Contact } from '../models/contact';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-contacts',
  template: `
    <mat-dialog-content>
      <!--<ac-contact-list [contacts]="contacts" (selectContact)="selectContact($event)" (editContact)="editContact($event)" (removeContact)="removeContact($event)"></ac-contact-list>-->
      <ac-contact-form></ac-contact-form>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button class="w-full !mt-4" mat-raised-button color="primary">
        Nuovo contatto
      </button>
    </mat-dialog-actions>
  `,
  styles: [
  ]
})
export class ContactsComponent implements OnInit {

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

  constructor() {}

  ngOnInit(): void {
  }

  selectContact(event: any) {
    console.log("selectContact", event);
  }

  editContact(event: any) {
    console.log("editContact", event);
  }

  removeContact(event: any) {
    console.log("removeContact", event);
  }

}
