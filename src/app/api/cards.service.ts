import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { Card } from './../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http: HttpClient) {}

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(environment.apiUrl + '/cards');
  }

  addCard(cardData: Card[]): Observable<Card[]> {
    return this.http.post<Card[]>(environment.apiUrl + '/cards', cardData);
  }

  deleteCard(cardId: string): Observable<boolean> {
    return this.http.delete<boolean>(environment.apiUrl + `/cards/${cardId}`);
  }


}
