import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Store } from '@ngrx/store'

const PLACE_ORDER_URL = 'http://www.mocky.io/v2/575de2a90f0000fa2a22ae43'

@Injectable()
export class OrderActions {
  constructor(
    private store: Store<any>,
    private http: Http
  ) {}

  static ADD_TO_ORDER = 'ADD_TO_ORDER'
  addToOrder(payload: Object) {
    this.store.dispatch({ type: OrderActions.ADD_TO_ORDER, payload })
  }

  static REMOVE_FROM_ORDER = 'REMOVE_FROM_ORDER'
  removeFromOrder(payload: Object) {
    this.store.dispatch({ type: OrderActions.REMOVE_FROM_ORDER, payload })
  }

  static SET_CUSTOMER_NAME = 'SET_CUSTOMER_NAME'
  setCustomerName(payload: string) {
    this.store.dispatch({ type: OrderActions.SET_CUSTOMER_NAME, payload })
  }

  static PLACE_ORDER = 'PLACE_ORDER'
  static PLACE_ORDER_SUCCESS = 'PLACE_ORDER_SUCCESS'
  placeOrder() {
    this.store.dispatch({
      type: OrderActions.PLACE_ORDER,
      payload: { status: 'PENDING' }
    })

    this.http.get(PLACE_ORDER_URL)
      .map(response => response.json())
      .subscribe(json => {
        this.store.dispatch({
          type: OrderActions.PLACE_ORDER_SUCCESS,
          payload: json
        })
      })
  }

  static CREATE_NEW_ORDER = 'CREATE_NEW_ORDER'
  createNewOrder() {
    this.store.dispatch({ type: OrderActions.CREATE_NEW_ORDER })
  }
}
