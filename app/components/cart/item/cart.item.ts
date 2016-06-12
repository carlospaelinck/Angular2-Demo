import { Component, Input } from '@angular/core'

@Component({
  selector: 'cart-item',
  template: require('./cart.item.html')
})

export class CartItemComponent {
  @Input() pizza: Object
}
