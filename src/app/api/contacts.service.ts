import { Contact } from 'src/app/models/contact';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${environment.apiUrl}/contacts`);
  }

  addContact(contactData: Partial<Contact>): Observable<Contact[]> {
    return this.http.post<Contact[]>(`${environment.apiUrl}/contacts`, contactData);
  }

  updateContact(selectedContactId: string, selectedContact: Partial<Contact>): Observable<Contact[]> {
    return this.http.put<Contact[]>(`${environment.apiUrl}/contacts/${selectedContactId}`, selectedContact);
  }

  deleteContact(contactId: string): Observable<boolean> {
    return this.http.delete<boolean>(`${environment.apiUrl}/contacts/${contactId}`);
  }
}
