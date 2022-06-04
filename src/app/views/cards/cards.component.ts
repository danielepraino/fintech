import { Card } from './../../models/card';
import { CardsService } from './../../api/cards.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDrawer } from '@angular/material/sidenav';
import { CardFormComponent } from './components/card-form.component';

@Component({
  selector: 'ac-cards',
  template: `
    <mat-sidenav-container>
      <mat-sidenav #sidenav mode="side" position="end">
        <ac-card-form
          (cardSubmitHandler)="cardSubmitHandler($event)"
          (closeAddCard)="sidenav.close()"
        ></ac-card-form>
      </mat-sidenav>
      <mat-sidenav-content class="min-h-screen">
        <ac-card-list
          [cards]="cards"
          (cardMovements)="cardMovements($event)"
          (deleteCard)="deleteCard($event)"
          (addCard)="sidenav.toggle()"
        ></ac-card-list>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [],
})
export class CardsComponent implements OnInit {

  @ViewChild('sidenav') sidenavRef!:MatDrawer;
  @ViewChild(CardFormComponent) cardFormRef!:CardFormComponent;

  cards: Card[] = [];

  constructor(private cardsService: CardsService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.cardsService.getCards().subscribe(res => {
      this.cards = res;
      console.log("CardsService.getCards()", res);
    });
  }

  addCard(cardData: Card[]) {
    this.cardsService.addCard(cardData).subscribe((res: any) => {
        this.cards = [...this.cards, res];
        this.snackBar.open('Carta aggiunta', 'SUCCESS', { duration: 2500, panelClass: ['text-green-400'] });
        this.sidenavRef.close();
    });
  }

  deleteCard(cardId: any) {
    this.cardsService.deleteCard(cardId).subscribe((res: any) => {
      if (res) {
        this.cards = this.cards.filter((card) => card._id != cardId);
        this.snackBar.open('Carta cancellata', 'SUCCESS', { duration: 2500, panelClass: ['text-green-400'] });
      } else {
        this.snackBar.open('Impossibile cancellare la carta', 'ERROR', { duration: 2500, panelClass: ['text-red-400'] });
      }
    });
  }

  cardMovements(cardId: any) {
    console.log('cardMovements', cardId);
  }

  cardSubmitHandler(form: NgForm) {
    if (!form.invalid) {
      this.addCard(form.value);
      this.cardFormRef.cleanup();
    }
  }
}
