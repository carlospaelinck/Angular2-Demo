import { Component } from '@angular/core'

@Component({
  selector: 'header-view',
  styles: [ require('./header.view.scss') ],
  directives: [ ],
  template: `
    <header>
      <h1>Milo’s Pizza</h1>
      <div class="links">
        <a [linkTo]="'/'">Home</a>
        <a [linkTo]="'/builder'">Create a Pizza</a>
      </div>
    </header>
  `
})

export class HeaderView { }
