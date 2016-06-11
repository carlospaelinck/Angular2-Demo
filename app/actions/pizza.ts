import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { PizzaState } from '../reducers/pizza'

@Injectable()
export class PizzaActions {

  static CREATE_NEW_PIZZA = 'CREATE_NEW_PIZZA'
  createNewPizza(): Action {
    return {
      type: PizzaActions.CREATE_NEW_PIZZA,
      payload: null
    }
  }

  static UPDATE_PIZZA = 'UPDATE_PIZZA'
  updatePizza(payload): Action {
    return {
      type: PizzaActions.UPDATE_PIZZA,
      payload
    }
  }

}
