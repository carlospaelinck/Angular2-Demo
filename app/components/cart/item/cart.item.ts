import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'cart-item',
  template: require('./cart.item.html')
})

export class CartItemComponent {
  @Input() pizza: Object
  @Output() onRemove: EventEmitter<any> = new EventEmitter()

  removeFromCart() {
    this.onRemove.emit(this.pizza)
  }
}
