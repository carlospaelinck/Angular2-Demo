import { compose } from '@ngrx/core/compose'
import { combineReducers } from '@ngrx/store'
import { storeLogger } from 'ngrx-store-logger'
import { routerReducer, RouterState } from '@ngrx/router-store'

import { pizzaReducer, PizzaState } from './pizza'

export interface AppState {
  router: RouterState,
  pizza: PizzaState
}

export default compose(storeLogger(), combineReducers)({
  router: routerReducer,
  pizza: pizzaReducer
})
