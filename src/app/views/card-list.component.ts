import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-card-list',
  template: `
    <p>
      card-list works!
    </p>
  `,
  styles: [
  ]
})
export class CardListComponent implements OnInit {

  /*cards: Card[] = [
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
  ];*/

  constructor() { }

  ngOnInit(): void {
  }

}
