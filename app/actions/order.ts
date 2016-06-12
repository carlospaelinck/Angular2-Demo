import { Injectable } from '@angular/core'

@Injectable()
export class OrderActions {

  static ADD_TO_ORDER = 'ADD_TO_ORDER'
  addToOrder(payload: Object) {
    return { type: OrderActions.ADD_TO_ORDER, payload }
  }
}
