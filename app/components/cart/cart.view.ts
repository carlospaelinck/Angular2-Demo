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
      if (order.status == 'PLACED') {
        alert(`Order Placed for ${order.customerName}.`)
        this.store.dispatch(this.orderActions.createNewOrder())
        this.router.go('/')
      }
    })
  }

  placeOrder() {
    this.store.dispatch(this.orderActions.setCustomerName(this.customerName))
    this.store.dispatch(this.orderActions.placeOrder())
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
