import { Injectable } from '@angular/core'
import { Effect, StateUpdates, toPayload } from '@ngrx/effects'
import { OrderActions } from '../actions/order'

@Injectable()
export class OrderEffects {
  constructor(
    private updates: StateUpdates<any>,
    private orderActions: OrderActions
  ) { }

  @Effect() placeOrder = this.updates
    .whenAction(OrderActions.PLACE_ORDER)
    .mergeMap(payload => {
      return new Promise((success, failure) => {
        /* Mock an API request that returns a successful pizza order */
        setTimeout(() => success({ status: 'PLACED' }), 500)
      })
      .then(json => this.orderActions.placeOrderSuccess(json))
    })
}
