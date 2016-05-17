import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  directives: [ ],
  template: `
    <h1>Angular 2 Demo</h1>
  `
})

export class AppComponent {
  constructor() {
    console.debug('hi')
  }
}
