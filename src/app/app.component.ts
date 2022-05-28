import { LoginComponent } from './views/login.component';
import { Component } from '@angular/core';

@Component({
  selector: 'ac-root',
  template: `
    <ac-login></ac-login>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'fintech';
}
