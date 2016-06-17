import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'cart-item',
  template: require('./cart.item.html'),
  styles: [ require('./cart.item.scss') ]
})

export class CartItemComponent {
  @Input() pizza: Object
  @Output() onRemove: EventEmitter<Object> = new EventEmitter()

  removeFromCart() {
    this.onRemove.emit(this.pizza)
  }
}
