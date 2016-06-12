import { Injectable } from '@angular/core'

@Injectable()
export class OrderActions {

  static ADD_TO_ORDER = 'ADD_TO_ORDER'
  addToOrder(payload: Object) {
    return { type: OrderActions.ADD_TO_ORDER, payload }
  }

  static SET_CUSTOMER_NAME = 'SET_CUSTOMER_NAME'
  setCustomerName(payload: string) {
    return { type: OrderActions.SET_CUSTOMER_NAME, payload }
  }

  static PLACE_ORDER = 'PLACE_ORDER'
  placeOrder() {
    return { type: OrderActions.PLACE_ORDER }
  }

  static PLACE_ORDER_SUCCESS = 'PLACE_ORDER_SUCCESS'
  placeOrderSuccess(payload) {
    return { type: OrderActions.PLACE_ORDER_SUCCESS, payload }
  }

  static CREATE_NEW_ORDER = 'CREATE_NEW_ORDER'
  createNewOrder() {
    return { type: OrderActions.CREATE_NEW_ORDER }
  }
}
