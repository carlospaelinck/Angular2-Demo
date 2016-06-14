import { Component } from '@angular/core'
import { Observable, Subscription } from 'rxjs'
import { Router } from '@ngrx/router'
import { BuilderStepComponent } from './step/builder.step'
import { Store } from '@ngrx/store'
import { PizzaActions } from '../../actions/pizza'

@Component({
  selector: 'builder-view',
  styles: [ require('./builder.view.scss') ],
  template: require('./builder.view.html'),
  directives: [ BuilderStepComponent ]
})

export class BuilderViewComponent {
  pizza: Observable<Object>

  constructor(
    private store: Store<Object>,
    private pizzaActions: PizzaActions,
    private router: Router
  ) {
    this.pizza = store.select('pizza')
    this.pizzaActions.createNewPizza()
  }
}
