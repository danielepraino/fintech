import { CardsService } from './../../api/cards.service';
import { Card } from 'src/app/models/card';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ac-movements',
  template: `
    <div class="w-full">
      <mat-form-field appearance="fill">
        <mat-label>Seleziona una carta</mat-label>
        <mat-select
          name="cardNum"
          #cardNumRef
          (selectionChange)="selectedCardMovements($event)"
        >
          <mat-option *ngFor="let card of cards" [value]="card._id">
            {{ card.number }}
          </mat-option>
        </mat-select>
      </mat-form-field>
      <div class="font-medium text-lg mb-4" *ngIf="selectedCard[0]">
        <span class="bg-blue-200 p-2"
          >Saldo: € {{ selectedCard[0].amount }}</span
        >
      </div>
      <ac-movement [movements]="movements.data"></ac-movement>
      <button
        *ngIf="movementsIncrement <= movements.total"
        class="w-full"
        mat-stroked-button
        (click)="loadMoreMovements(selectedCard, movementsLimit, movementsOffset, movementsIncrement)"
      >
        Carica altro
      </button>
    </div>
  `,
  styles: [],
})
export class MovementsComponent implements OnInit {
  cards: Card[] = [];
  selectedCard: Card[] = [];
  movements: any = [];
  urlParam: any = {};

  movementsLimit: number = 5;
  movementsOffset: number = 0;
  movementsIncrement: number = 0;

  queryCard: Card[] = [];

  constructor(private cardsService: CardsService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.cardsService.getCards().subscribe((res) => {
      this.cards = res;
      this.urlParam = { value: this.activatedRoute.snapshot.params['cardId'] }
      if(this.urlParam.value != undefined) {
        this.selectedCardMovements(this.urlParam);
      }
    });
  }

  cardMovements(selectedCard: any, limit: number, offset: number) {
    this.cardsService
      .getCardMovements(selectedCard[0]._id, limit, offset)
      .subscribe((res: any) => {
        this.movements = res;
      });
  }

  selectedCardMovements(cardId: any) {
    this.router.navigateByUrl(`dashboard/movements/${cardId.value}`);
    this.movements = [];
    this.movementsIncrement = 5;
    this.selectedCard = this.cards.filter((card) => card._id == cardId.value);
    this.cardMovements(this.selectedCard, this.movementsLimit, this.movementsOffset);
  }

  loadMoreMovements(selectedCard: any, limit: number, offset: number, increment: number) {
    if (this.movementsIncrement <= this.movements.total) {
      this.cardMovements(selectedCard, (limit += this.movementsIncrement), offset);
      this.movementsIncrement += increment;
    }
  }
}
