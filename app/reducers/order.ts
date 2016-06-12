import { ActionReducer, Action } from '@ngrx/store'
import { OrderActions } from '../actions/order'

const defaultState = {
  pizzas: [],
  totalPrice: 0,
  customerName: '',
  status: 'PENDING'
}

export const orderReducer: ActionReducer<Object> = (state = defaultState, action: Action) => {

  switch (action.type) {
    case OrderActions.CREATE_NEW_ORDER: {
      return Object.assign({}, defaultState)
    }

    case OrderActions.ADD_TO_ORDER: {
      const pizza = {
        ingredients: action.payload.ingredients,
        price: action.payload.price
      }
      const pizzas = [ ...state.pizzas, pizza ]
      const totalPrice = state.totalPrice + action.payload.price
      return Object.assign({}, state, { pizzas, totalPrice })
    }

    case OrderActions.SET_CUSTOMER_NAME: {
      return Object.assign({}, state, { customerName: action.payload })
    }

    case OrderActions.PLACE_ORDER_SUCCESS: {
      return Object.assign({}, state, action.payload)
    }

    default: return state
  }
}
