import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable, Subscription } from 'rxjs'
import { OrderActions } from '../../actions/order'
import { Router } from '@ngrx/router'
import { CartItemComponent } from './item/cart.item'

@Component({
  selector: 'cart-view',
  styles: [ require('./cart.view.scss') ],
  template: require('./cart.view.html'),
  directives: [ CartItemComponent ]
})

export class CartViewComponent {
  order: Observable<Object>
  subscription: Subscription
  customerName: string = ''
  totalPrice: number = 0

  constructor(
    private orderActions: OrderActions,
    private router: Router,
    private store: Store<Object>
  ) {
    this.order = this.store.select('order')

    this.subscription = this.order.subscribe((order: any) => {
      if (order.status === 'SUCCESS') {
        alert(`Order Placed for ${order.customerName}.`)
        this.orderActions.createNewOrder()
        this.router.go('/')
      }
    })
  }

  removePizzaFromCart(pizza: Object) {
    this.orderActions.removeFromOrder(pizza)
  }

  placeOrder() {
    this.orderActions.setCustomerName(this.customerName)
    this.orderActions.placeOrder()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
