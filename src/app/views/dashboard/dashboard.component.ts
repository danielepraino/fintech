import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-dashboard',
  template: `
    <p>
      Benvenuto nella dashboard di NgFintech!
    </p>
  `,
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
