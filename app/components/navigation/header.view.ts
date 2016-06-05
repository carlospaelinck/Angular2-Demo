import { Component } from '@angular/core'
import { ROUTER_DIRECTIVES } from '@angular/router'

@Component({
  selector: 'header-view',
  styles: [ require('./header.view.scss') ],
  directives: [ ROUTER_DIRECTIVES ],
  template: `
    <header>
      <h1>Milo’s Pizza</h1>
      <div class="links">
        <a [routerLink]="['/']">Home</a>
        <a [routerLink]="['/builder']">Build a Pizza</a>
      </div>
    </header>
  `
})

export class HeaderView { }
