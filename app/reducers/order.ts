import { ActionReducer, Action } from '@ngrx/store'
import { OrderActions } from '../actions/order'

const defaultState = {
  pizzas: [],
  totalPrice: 0,
  customerName: ''
}

export const orderReducer: ActionReducer<Object> = (state = defaultState, action: Action) => {
  return state
}
