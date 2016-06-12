import { compose } from '@ngrx/core/compose'
import { combineReducers } from '@ngrx/store'
import { storeLogger } from 'ngrx-store-logger'
import { routerReducer, RouterState } from '@ngrx/router-store'
import { pizzaReducer } from './pizza'
import { orderReducer } from './order'

/* Compose the application reducer with the store logger and
 * combine reducers middleware. Then curry an object containing
 * all the application reducers to the returned function. */
export default compose(storeLogger(), combineReducers)({
  router: routerReducer,
  pizza: pizzaReducer,
  order: orderReducer
})
