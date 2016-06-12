import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

@Component({
  selector: 'header-view',
  styles: [ require('./header.view.scss') ],
  template: `
    <header>
      <h1>Milo’s Pizza</h1>
      <div class="links">
        <a [linkTo]="'/'">Home</a>
        <a [linkTo]="'/builder'">Create a Pizza</a>
        <a [linkTo]="'/cart'">
          Order: {{ (order | async)?.pizzas.length }}
        </a>
      </div>
    </header>
  `
})

export class HeaderView {
  order: Observable<any>

  constructor(private store: Store<any>) {
    this.order = this.store.select('order')
  }
}
