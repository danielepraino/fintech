import { Movement } from 'src/app/models/movement';
import { Card } from 'src/app/models/card';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-movements',
  template: `
    <div class="w-full">
      <mat-form-field appearance="fill">
        <mat-label>Seleziona una carta</mat-label>
        <mat-select name="cardNum" #cardNumRef (selectionChange)="movementsByCard($event)">
          <mat-option *ngFor="let card of cards" [value]="card._id">
            {{card.number}}
          </mat-option>
        </mat-select>
      </mat-form-field>
      <h4>Saldo: €2000</h4>
      <ac-movement [movements]="filteredMovements"></ac-movement>
      <button *ngIf="loadMore < singleCardMovements.length" class="w-full" mat-stroked-button (click)="loadMore = loadMore + 5">Carica altro</button>
    </div>
  `,
  styles: [
  ]
})
export class MovementsComponent implements OnInit {

  movements: Movement[] = [
    {  _id: 'id123',
      type: 'out',
      amount: 500,
      title: 'Movimento 1 test test test',
      description: 'Lorem ipsum dolor sit amet',
      cardId: 'id1234',
      timestamp: Date.now(),
    },
    {  _id: 'id456',
      type: 'in',
      amount: 2500,
      title: 'Movimento 1 test test test',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum magna a lacinia semper. Proin vulputate sagittis justo, iaculis porta justo consectetur nec. Vivamus malesuada sollicitudin neque a tristique. Aliquam a magna et velit commodo gravida. Duis in varius lorem. Mauris vel sem eu orci suscipit sollicitudin at gravida tortor. Phasellus consequat eget quam et congue.',
      cardId: 'id5678',
      timestamp: Date.now(),
    },
    {  _id: 'id456',
      type: 'out',
      amount: 1000,
      title: 'Movimento 2 test test test',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum magna a lacinia semper. Proin vulputate sagittis justo, iaculis porta justo consectetur nec. Vivamus malesuada sollicitudin neque a tristique. Aliquam a magna et velit commodo gravida. Duis in varius lorem. Mauris vel sem eu orci suscipit sollicitudin at gravida tortor. Phasellus consequat eget quam et congue.',
      cardId: 'id5678',
      timestamp: Date.now(),
    },
    {  _id: 'id456',
      type: 'in',
      amount: 2500,
      title: 'Movimento 1 test test test',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum magna a lacinia semper. Proin vulputate sagittis justo, iaculis porta justo consectetur nec. Vivamus malesuada sollicitudin neque a tristique. Aliquam a magna et velit commodo gravida. Duis in varius lorem. Mauris vel sem eu orci suscipit sollicitudin at gravida tortor. Phasellus consequat eget quam et congue.',
      cardId: 'id5678',
      timestamp: Date.now(),
    },
    {  _id: 'id456',
      type: 'out',
      amount: 1000,
      title: 'Movimento 2 test test test',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum magna a lacinia semper. Proin vulputate sagittis justo, iaculis porta justo consectetur nec. Vivamus malesuada sollicitudin neque a tristique. Aliquam a magna et velit commodo gravida. Duis in varius lorem. Mauris vel sem eu orci suscipit sollicitudin at gravida tortor. Phasellus consequat eget quam et congue.',
      cardId: 'id5678',
      timestamp: Date.now(),
    },
    {  _id: 'id456',
      type: 'in',
      amount: 2500,
      title: 'Movimento 1 test test test',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum magna a lacinia semper. Proin vulputate sagittis justo, iaculis porta justo consectetur nec. Vivamus malesuada sollicitudin neque a tristique. Aliquam a magna et velit commodo gravida. Duis in varius lorem. Mauris vel sem eu orci suscipit sollicitudin at gravida tortor. Phasellus consequat eget quam et congue.',
      cardId: 'id5678',
      timestamp: Date.now(),
    },
    {  _id: 'id456',
      type: 'out',
      amount: 1000,
      title: 'Movimento 2 test test test',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum magna a lacinia semper. Proin vulputate sagittis justo, iaculis porta justo consectetur nec. Vivamus malesuada sollicitudin neque a tristique. Aliquam a magna et velit commodo gravida. Duis in varius lorem. Mauris vel sem eu orci suscipit sollicitudin at gravida tortor. Phasellus consequat eget quam et congue.',
      cardId: 'id5678',
      timestamp: Date.now(),
    },
    {  _id: 'id456',
      type: 'in',
      amount: 2500,
      title: 'Movimento 1 test test test',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum magna a lacinia semper. Proin vulputate sagittis justo, iaculis porta justo consectetur nec. Vivamus malesuada sollicitudin neque a tristique. Aliquam a magna et velit commodo gravida. Duis in varius lorem. Mauris vel sem eu orci suscipit sollicitudin at gravida tortor. Phasellus consequat eget quam et congue.',
      cardId: 'id5678',
      timestamp: Date.now(),
    },
    {  _id: 'id456',
      type: 'out',
      amount: 1000,
      title: 'Movimento 2 test test test',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum magna a lacinia semper. Proin vulputate sagittis justo, iaculis porta justo consectetur nec. Vivamus malesuada sollicitudin neque a tristique. Aliquam a magna et velit commodo gravida. Duis in varius lorem. Mauris vel sem eu orci suscipit sollicitudin at gravida tortor. Phasellus consequat eget quam et congue.',
      cardId: 'id5678',
      timestamp: Date.now(),
    },
    {  _id: 'id456',
      type: 'in',
      amount: 2500,
      title: 'Movimento 1 test test test',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum magna a lacinia semper. Proin vulputate sagittis justo, iaculis porta justo consectetur nec. Vivamus malesuada sollicitudin neque a tristique. Aliquam a magna et velit commodo gravida. Duis in varius lorem. Mauris vel sem eu orci suscipit sollicitudin at gravida tortor. Phasellus consequat eget quam et congue.',
      cardId: 'id5678',
      timestamp: Date.now(),
    },
    {  _id: 'id456',
      type: 'out',
      amount: 1000,
      title: 'Movimento 2 test test test',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum magna a lacinia semper. Proin vulputate sagittis justo, iaculis porta justo consectetur nec. Vivamus malesuada sollicitudin neque a tristique. Aliquam a magna et velit commodo gravida. Duis in varius lorem. Mauris vel sem eu orci suscipit sollicitudin at gravida tortor. Phasellus consequat eget quam et congue.',
      cardId: 'id5678',
      timestamp: Date.now(),
    },
    {  _id: 'id456',
      type: 'in',
      amount: 2500,
      title: 'Movimento 1 test test test',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum magna a lacinia semper. Proin vulputate sagittis justo, iaculis porta justo consectetur nec. Vivamus malesuada sollicitudin neque a tristique. Aliquam a magna et velit commodo gravida. Duis in varius lorem. Mauris vel sem eu orci suscipit sollicitudin at gravida tortor. Phasellus consequat eget quam et congue.',
      cardId: 'id5678',
      timestamp: Date.now(),
    },
    {  _id: 'id456',
      type: 'out',
      amount: 1000,
      title: 'Movimento 2 test test test',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum magna a lacinia semper. Proin vulputate sagittis justo, iaculis porta justo consectetur nec. Vivamus malesuada sollicitudin neque a tristique. Aliquam a magna et velit commodo gravida. Duis in varius lorem. Mauris vel sem eu orci suscipit sollicitudin at gravida tortor. Phasellus consequat eget quam et congue.',
      cardId: 'id5678',
      timestamp: Date.now(),
    },
    {  _id: 'id456',
      type: 'in',
      amount: 2500,
      title: 'Movimento 1 test test test',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum magna a lacinia semper. Proin vulputate sagittis justo, iaculis porta justo consectetur nec. Vivamus malesuada sollicitudin neque a tristique. Aliquam a magna et velit commodo gravida. Duis in varius lorem. Mauris vel sem eu orci suscipit sollicitudin at gravida tortor. Phasellus consequat eget quam et congue.',
      cardId: 'id5678',
      timestamp: Date.now(),
    },
    {  _id: 'id456',
      type: 'out',
      amount: 1000,
      title: 'Movimento 2 test test test',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum magna a lacinia semper. Proin vulputate sagittis justo, iaculis porta justo consectetur nec. Vivamus malesuada sollicitudin neque a tristique. Aliquam a magna et velit commodo gravida. Duis in varius lorem. Mauris vel sem eu orci suscipit sollicitudin at gravida tortor. Phasellus consequat eget quam et congue.',
      cardId: 'id5678',
      timestamp: Date.now(),
    },
    {  _id: 'id456',
      type: 'in',
      amount: 2500,
      title: 'Movimento 1 test test test',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum magna a lacinia semper. Proin vulputate sagittis justo, iaculis porta justo consectetur nec. Vivamus malesuada sollicitudin neque a tristique. Aliquam a magna et velit commodo gravida. Duis in varius lorem. Mauris vel sem eu orci suscipit sollicitudin at gravida tortor. Phasellus consequat eget quam et congue.',
      cardId: 'id5678',
      timestamp: Date.now(),
    },
    {  _id: 'id456',
      type: 'out',
      amount: 1000,
      title: 'Movimento 2 test test test',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum magna a lacinia semper. Proin vulputate sagittis justo, iaculis porta justo consectetur nec. Vivamus malesuada sollicitudin neque a tristique. Aliquam a magna et velit commodo gravida. Duis in varius lorem. Mauris vel sem eu orci suscipit sollicitudin at gravida tortor. Phasellus consequat eget quam et congue.',
      cardId: 'id5678',
      timestamp: Date.now(),
    },
    {  _id: 'id456',
      type: 'in',
      amount: 2500,
      title: 'Movimento 1 test test test',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum magna a lacinia semper. Proin vulputate sagittis justo, iaculis porta justo consectetur nec. Vivamus malesuada sollicitudin neque a tristique. Aliquam a magna et velit commodo gravida. Duis in varius lorem. Mauris vel sem eu orci suscipit sollicitudin at gravida tortor. Phasellus consequat eget quam et congue.',
      cardId: 'id5678',
      timestamp: Date.now(),
    },
    {  _id: 'id456',
      type: 'out',
      amount: 1000,
      title: 'Movimento 2 test test test',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum magna a lacinia semper. Proin vulputate sagittis justo, iaculis porta justo consectetur nec. Vivamus malesuada sollicitudin neque a tristique. Aliquam a magna et velit commodo gravida. Duis in varius lorem. Mauris vel sem eu orci suscipit sollicitudin at gravida tortor. Phasellus consequat eget quam et congue.',
      cardId: 'id5678',
      timestamp: Date.now(),
    },
    {  _id: 'id456',
      type: 'in',
      amount: 2500,
      title: 'Movimento 1 test test test',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum magna a lacinia semper. Proin vulputate sagittis justo, iaculis porta justo consectetur nec. Vivamus malesuada sollicitudin neque a tristique. Aliquam a magna et velit commodo gravida. Duis in varius lorem. Mauris vel sem eu orci suscipit sollicitudin at gravida tortor. Phasellus consequat eget quam et congue.',
      cardId: 'id5678',
      timestamp: Date.now(),
    },
    {  _id: 'id456',
      type: 'out',
      amount: 1000,
      title: 'Movimento 2 test test test',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum magna a lacinia semper. Proin vulputate sagittis justo, iaculis porta justo consectetur nec. Vivamus malesuada sollicitudin neque a tristique. Aliquam a magna et velit commodo gravida. Duis in varius lorem. Mauris vel sem eu orci suscipit sollicitudin at gravida tortor. Phasellus consequat eget quam et congue.',
      cardId: 'id5678',
      timestamp: Date.now(),
    }
  ]

  cards: Card[] = [
    {
      _id: 'id123',
      number: 1231231231231231,
      ownerId: 'idMario123',
      owner: 'Mario Rossi',
      type: 'visa',
      amount: 2500,
    },
    {
      _id: 'id456',
      number: 4564564564564564,
      ownerId: 'idLuigi456',
      owner: 'Luigi Bianchi',
      type: 'mastercard',
      amount: 500,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  filteredMovements: Movement[] = [...this.movements];
  singleCardMovements: Movement[] = [];
  loadMore: number = 5;

  movementsByCard(cardId: any) {
    if (this.loadMore >= this.singleCardMovements.length) {
      this.loadMore = 5;
    }
    this.filteredMovements = [...this.movements];
    this.singleCardMovements = this.filteredMovements.filter(movement => movement._id == cardId.value);
    return this.filteredMovements = this.filteredMovements.filter((movement, index) => movement._id == cardId.value && index < this.loadMore);
  }
}
