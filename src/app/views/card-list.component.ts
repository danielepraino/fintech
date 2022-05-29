import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Card } from './../models/card';

@Component({
  selector: 'ac-card-list',
  template: `
    <mat-card class="login-container">
      <h3>Carte</h3>
      <div *ngFor="let card of cards" class="d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center">
          <mat-icon matPrefix class="light-grey mr-25">credit_card</mat-icon>
          <div>
            <div>{{card.id}}</div>
            <div>{{card.amount}} - {{card.type}}</div>
          </div>
        </div>
        <div>
          <mat-icon
            matSuffix
            matTooltip="Vedi movimenti"
            matTooltipPosition="below"
            (click) = "cardMovements.emit(card.id)"
          >
            receipt_long
          </mat-icon>
          <mat-icon
            matSuffix
            matTooltip="Rimuovi"
            matTooltipPosition="below"
            (click) = "removeCard.emit(card.id)"
          >
            delete
          </mat-icon>
        </div>
      </div>
      <button mat-raised-button class="w-full" (click)="addCard.emit()">Aggiungi</button>
    </mat-card>
  `,
  styles: [
  ]
})
export class CardListComponent implements OnInit {

  cards: Card[] = [
    {
      id: 'ac24141',
      number: 12345,
      ownerId: '141414',
      owner: 'Mario Rossi',
      type: 'visa',
      amount: 2000,
    },
    {
      id: 'bg12412',
      number: 678910,
      ownerId: '090909',
      owner: 'Luigi Bianchi',
      type: 'mastercard',
      amount: 500,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  @Output() cardMovements = new EventEmitter<any>();
  @Output() removeCard = new EventEmitter<any>();
  @Output() addCard = new EventEmitter<Card>();

}
