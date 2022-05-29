import { Component } from '@angular/core';

@Component({
  selector: 'ac-root',
  template: `
    <!--<ac-login></ac-login>-->
    <ac-cards></ac-cards>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'fintech';
}
