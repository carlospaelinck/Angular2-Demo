import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Store } from '@ngrx/store'

@Injectable()
export class PizzaActions {
  constructor(private store: Store<any>) {}

  static CREATE_NEW_PIZZA = 'CREATE_NEW_PIZZA'
  createNewPizza() {
    this.store.dispatch({ type: PizzaActions.CREATE_NEW_PIZZA })
  }

  static UPDATE_PIZZA = 'UPDATE_PIZZA'
  updatePizza(payload: Object) {
    this.store.dispatch({ type: PizzaActions.UPDATE_PIZZA, payload })
  }

  static NEXT_STEP = 'NEXT_STEP'
  nextStep() {
    this.store.dispatch({ type: PizzaActions.NEXT_STEP })
  }

  static PREVIOUS_STEP = 'PREVIOUS_STEP'
  previousStep() {
    this.store.dispatch({ type: PizzaActions.PREVIOUS_STEP })
  }
}
