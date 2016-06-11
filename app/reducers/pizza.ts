import { ActionReducer, Action } from '@ngrx/store'
import { PizzaActions } from '../actions/pizza'

export interface PizzaState {
  crust: string,
  cheese: string,
  sauce: string,
  meat: Array<string>,
  veggies: Array<String>
}

const defaultState: PizzaState = {
  crust: 'Pan',
  cheese: 'Standard',
  sauce: 'Marinara',
  meat: [],
  veggies: []
}

export const pizzaReducer: ActionReducer<PizzaState> = (state: PizzaState = defaultState, action: Action) => {
  switch (action.type) {
    case PizzaActions.CREATE_NEW_PIZZA:
    return Object.assign({}, defaultState)

    case PizzaActions.UPDATE_PIZZA:
    return Object.assign({}, state, action.payload)

    default:
    return state
  }
}
