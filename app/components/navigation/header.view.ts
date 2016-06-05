import { Component } from '@angular/core'

@Component({
  selector: 'header-view',
  styles: [ require('./header.view.scss') ],
  template: `
    <header>
      <h1>Milo’s Pizza</h1>
    </header>
  `
})

export class HeaderView { }
