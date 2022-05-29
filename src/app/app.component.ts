import { LoginComponent } from './views/login.component';
import { Component } from '@angular/core';

@Component({
  selector: 'ac-root',
  template: `
    <ac-login></ac-login>
    <ac-card-list (cardMovements)="cardMovements($event)" (removeCard)="removeCard($event)" (addCard)="addCard($event)"></ac-card-list>
    <ac-card-form></ac-card-form>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'fintech';

  cardMovements(event: any) {
    console.log("cardMovements", event);
  }

  removeCard(event: any) {
    console.log("removeCard", event);
  }

  addCard(event: any) {
    console.log("addCard", event);
  }
}
