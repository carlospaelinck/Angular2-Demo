import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable, Subscription } from 'rxjs'
import { ingredientsForStep } from '../../../helpers/ingredients'
import { PizzaActions } from '../../../actions/pizza'

@Component({
  selector: 'builder-step',
  styles: [ require('./builder.step.scss') ],
  template: require('./builder.step.html')
})

export class BuilderStepComponent {
  pizza: Observable<any>
  subscription: Subscription
  availableIngredients: Array<string> = []
  allowMultipleIngredients: boolean = false

  constructor(
    private store: Store<any>,
    private pizzaActions: PizzaActions
  ) {
    this.pizza = this.store.select('pizza')

    /* Listen to changes on the pizza state to determine which
     * ingredient buttons to show. Some steps allow a single choice
     * or multiple or no choices. */
    this.subscription = this.pizza.subscribe(pizza => {
      const { step } = pizza
      this.availableIngredients = ingredientsForStep(step)
      this.allowMultipleIngredients = pizza.ingredients[step] instanceof Array
    })
  }

  proceedToNextStep() {
    // this.store.dispatch(this.pizzaActions.updatePizza({}))
    this.store.dispatch(this.pizzaActions.nextStep())
  }

  returnToPreviousStep() {
    this.store.dispatch(this.pizzaActions.previousStep())
  }
}
