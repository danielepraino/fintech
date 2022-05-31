import { Card } from './../models/card';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-cards',
  template: `
  <mat-sidenav-container>
    <mat-sidenav #sidenav mode="side" position="end">
      <ac-card-form (cardSubmitHandler)="cardSubmitHandler($event)" (closeAddCard)="sidenav.close()"></ac-card-form>
    </mat-sidenav>
    <mat-sidenav-content class="min-h-screen">
      <ac-card-list [cards]="cards" (cardMovements)="cardMovements($event)" (removeCard)="removeCard($event)" (addCard)="sidenav.toggle()"></ac-card-list>
    </mat-sidenav-content>
  </mat-sidenav-container>
  `,
  styles: [
  ]
})
export class CardsComponent implements OnInit {

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
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  cardMovements(event: any) {
    console.log("cardMovements", event);
  }

  removeCard(selectedCard: any) {
    console.log(selectedCard);
    this.cards = this.cards.filter(card => card.id != selectedCard);
  }

  cardSubmitHandler(form: NgForm) {
    if (!form.invalid) {
      this.cards = [...this.cards, form.value];
      console.log(form.value);
      form.reset();
    }
  }

}
