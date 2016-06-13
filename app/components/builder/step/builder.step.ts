import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Router } from '@ngrx/router'
import { Observable, Subscription } from 'rxjs'
import { ingredientsForStep } from '../../../helpers/ingredients'
import { PizzaActions } from '../../../actions/pizza'
import { OrderActions } from '../../../actions/order'
import { steps } from '../../../reducers/pizza'

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
  currentSelection: any = null
  buttonVisibility: Object = { back: false, next: false, addToCart: false }

  constructor(
    private store: Store<any>,
    private pizzaActions: PizzaActions,
    private orderActions: OrderActions,
    private router: Router
  ) {
    this.pizza = this.store.select('pizza')

    /* Listen to changes on the pizza state to determine which
     * ingredient buttons to show. Some steps allow a single choice
     * or multiple or no choices. */
    this.subscription = this.pizza.subscribe(pizza => {
      const { step, ingredients } = pizza
      this.currentSelection = ingredients[step]
      this.availableIngredients = ingredientsForStep(step)
      this.allowMultipleIngredients = pizza.ingredients[step] instanceof Array

      /* Determine which navigation buttons to show depending on what
       * current build step. */
      switch (steps.indexOf(step)) {
        case 0:
        this.buttonVisibility = { back: false, next: true, addToCart: false }
        break

        case steps.length - 1:
        this.buttonVisibility = { back: true, next: false, addToCart: true }
        break

        default:
        this.buttonVisibility = { back: true, next: true, addToCart: false }
      }
    })
  }

  ingredientElementSelected(ingredient: HTMLInputElement) {
    /* Get the value from the input element and determine if
     * is selected and dispatch the update pizza action. */
    this.pizzaActions.updatePizza({
      value: ingredient.value,
      checked: ingredient.checked
    })
  }

  proceedToNextStep() {
    this.pizzaActions.nextStep()
  }

  returnToPreviousStep() {
    this.pizzaActions.previousStep()
  }

  addPizzaToOrder() {
    this.pizza.subscribe(pizza => {
      this.orderActions.addToOrder(pizza)
    }).unsubscribe()

    this.router.go('/cart')
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
