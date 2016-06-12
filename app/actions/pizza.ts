import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'

@Injectable()
export class PizzaActions {

  static CREATE_NEW_PIZZA = 'CREATE_NEW_PIZZA'
  createNewPizza(): Action {
    return { type: PizzaActions.CREATE_NEW_PIZZA }
  }

  static UPDATE_PIZZA = 'UPDATE_PIZZA'
  updatePizza(payload: Object): Action {
    return { type: PizzaActions.UPDATE_PIZZA, payload }
  }

  static NEXT_STEP = 'NEXT_STEP'
  nextStep(): Action {
    return { type: PizzaActions.NEXT_STEP }
  }

  static PREVIOUS_STEP = 'PREVIOUS_STEP'
  previousStep(): Action {
    return { type: PizzaActions.PREVIOUS_STEP }
  }
}
