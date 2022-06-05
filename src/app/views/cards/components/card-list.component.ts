import { Card } from 'src/app/models/card';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ac-card-list',
  template: `
    <mat-card class="w-full">
      <h3>Carte</h3>
      <div *ngFor="let card of cards" class="flex justify-between items-center">
        <div class="flex items-center my-1">
          <mat-icon matPrefix class="text-gray-400 mr-4">credit_card</mat-icon>
          <div>
            <div>{{ card.owner }}</div>
            <div><span class="font-medium">€{{ card.amount }}</span> - {{ card.type }}</div>
          </div>
        </div>
        <div>
          <mat-icon
            class="cursor-pointer"
            matSuffix
            matTooltip="Vedi movimenti"
            matTooltipPosition="below"
            (click)="cardMovements.emit(card._id)"
          >
            receipt_long
          </mat-icon>
          <mat-icon
            class="cursor-pointer"
            matSuffix
            matTooltip="Rimuovi"
            matTooltipPosition="below"
            (click)="deleteCard.emit(card._id)"
          >
            delete
          </mat-icon>
        </div>
      </div>
      <button
        mat-raised-button
        class="w-full !mt-4"
        (click)="addCard.emit(true)"
      >
        Aggiungi
      </button>
    </mat-card>
  `,
  styles: [],
})
export class CardListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() cards: Card[] = [];
  @Output() cardMovements = new EventEmitter<any>();
  @Output() deleteCard = new EventEmitter<any>();
  @Output() addCard = new EventEmitter<any>();
}
