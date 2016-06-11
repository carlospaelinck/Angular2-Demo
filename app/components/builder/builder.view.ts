import { Component } from '@angular/core'
import { BuilderStepComponent } from './step/builder.step'
import { Router, Routes, ROUTER_DIRECTIVES } from '@angular/router'
import PizzaService from '../../services/pizza'

@Component({
  selector: 'builder-view',
  styles: [ require('./builder.view.scss') ],
  template: require('./builder.view.html'),
  directives: [ ROUTER_DIRECTIVES ],
  providers: [ PizzaService ]
})

@Routes([
  { path: '/step/:step', component: BuilderStepComponent }
])

export class BuilderViewComponent {
  constructor(
    private router: Router,
    private pizzaService: PizzaService) { }

  ngOnInit() {
    this.pizzaService.stepObserver.subscribe(step => {
      this.router.navigate([`/builder/step/${step}`])
    })
  }
}
