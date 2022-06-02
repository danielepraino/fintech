import { Component } from '@angular/core';

@Component({
  selector: 'ac-root',
  template: `
    <!--<ac-login></ac-login>-->
    <ac-navmenu></ac-navmenu>
    <!--<ac-cards></ac-cards>-->
    <!--<ac-movements></ac-movements>-->
    <!--<ac-transfer></ac-transfer>-->
    <!--<ac-appointments></ac-appointments>-->
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'fintech';
}
