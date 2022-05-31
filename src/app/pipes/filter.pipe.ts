import { Contact } from '../models/contact';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(contacts: Contact[], text: string) {
    if (text === '') {
      return contacts;
    }
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(text.toLowerCase()) || contact.surname.toLowerCase().includes(text.toLowerCase());
    });
  }
}
