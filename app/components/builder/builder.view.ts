import { Component } from '@angular/core'
import { Observable, Subscription } from 'rxjs'
import { Store } from '@ngrx/store'
import { Router } from '@ngrx/router'
import { BuilderStepComponent } from './step/builder.step'
import { PizzaActions } from '../../actions/pizza'

@Component({
  selector: 'builder-view',
  styles: [ require('./builder.view.scss') ],
  template: require('./builder.view.html'),
})

export class BuilderViewComponent {
  pizza: Observable<any>
  subscription: Subscription

  constructor(
    private store: Store<any>,
    private pizzaActions: PizzaActions,
    private router: Router
  ) {
    this.pizza = store.select('pizza')
    this.pizzaActions.createNewPizza()

    /* Listen to the step changes on the pizza state and
     * navigate to the builder child route only when the
     * step property changes. */
    this.subscription = this.pizza
      .distinctUntilChanged(null, pizza => pizza.step)
      .subscribe(pizza => router.go(`/builder/${pizza.step}`))
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
