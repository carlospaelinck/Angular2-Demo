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
  instructions: Object

  constructor(
    private store: Store<Object>,
    private pizzaActions: PizzaActions,
    private router: Router
  ) {
    this.pizza = store.select('pizza')
    this.pizzaActions.createNewPizza()

    this.instructions = {
      crust: 'Choose a crust for your pizza.',
      cheese: 'Choose the amount of mozzarella cheese on your pizza.',
      sauce: 'Choose a sauce for your pizza.',
      meat: 'Pick any meats for your pizza. Each meat costs $1.99 extra.',
      veggies: 'Pick any veggies for your pizza. Each veggie costs 99¢ extra.'
    }
  }
}
