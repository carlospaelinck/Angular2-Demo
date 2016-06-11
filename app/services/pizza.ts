import { Injectable } from '@angular/core'
import { BehaviorSubject, Subject } from 'rxjs/Rx'
import { Pizza } from '../models/pizza'

@Injectable()
export default class PizzaService {
  public steps: Array<string> = [ 'crust', 'cheese', 'meat', 'veggies' ]
  public stepObserver = new BehaviorSubject<string>(this.steps[0])

  // constructor(private orderService: OrderService) {
  //
  // }

  proceedToNextStep() {
    const currentStep = <string>this.stepObserver.getValue()
    const index = this.steps.indexOf(currentStep) + 1
    this.stepObserver.next(this.steps[Math.min(index, this.steps.length - 1)])
  }

  returnToPreviousStep() {
    const currentStep = <string>this.stepObserver.getValue()
    const index = this.steps.indexOf(currentStep) - 1
    this.stepObserver.next(this.steps[Math.max(index, 0)])
  }

  // createNewPizza() {
  //   // const pizza = new Pizza()
  //
  // }
}
