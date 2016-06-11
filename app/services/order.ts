import { Injectable } from '@angular/core'
import { BehaviorSubject, Subject } from 'rxjs/Rx'
import { Order } from '../models/order'

@Injectable()
export default class OrderService {
  public orderObserver = new BehaviorSubject<Order>(new Order())

}
