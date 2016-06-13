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
  order: Observable<any>
  subscription: Subscription
  customerName: string = ''

  constructor(
    private orderActions: OrderActions,
    private router: Router,
    private store: Store<any>
  ) {
    this.order = this.store.select('order')

    this.subscription = this.order.subscribe(order => {
      if (order.status === 'SUCCESS') {
        alert(`Order Placed for ${order.customerName}.`)
        this.orderActions.createNewOrder()
        this.router.go('/')
      }
    })
  }

  removePizzaFromCart(pizza: any) {
    console.debug(pizza)
  }

  placeOrder() {
    this.orderActions.setCustomerName(this.customerName)
    this.orderActions.placeOrder()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
