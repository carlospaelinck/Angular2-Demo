import { Component } from '@angular/core'
import { RouteSegment, Router } from '@angular/router'
import PizzaService from '../../../services/pizza'

@Component({
  selector: 'builder-step',
  styles: [ require('./builder.step.scss') ],
  template: require('./builder.step.html')
})

export class BuilderStepComponent {
  private step: string = ''

  constructor(
    private pizzaService: PizzaService,
    routeSegment: RouteSegment) {
    this.step = routeSegment.getParam('step')
  }

  proceedToNextStep() {
    this.pizzaService.proceedToNextStep()
  }

  returnToPreviousStep() {
    this.pizzaService.returnToPreviousStep()
  }
}
