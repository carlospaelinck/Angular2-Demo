import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

@Component({
  selector: 'header-view',
  styles: [ require('./header.view.scss') ],
  template: `
    <header>
      <h1>
        <a [linkTo]="'/'">Milo’s Pizza</a>
      </h1>
      <div class="links">
        <a [linkTo]="'/cart'">
          View Order ({{ (order | async)?.pizzas.length }})
        </a>
      </div>
    </header>
  `
})

export class HeaderView {
  order: Observable<Object>

  constructor(private store: Store<Object>) {
    this.order = this.store.select('order')
  }
}
