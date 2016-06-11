import { Component } from '@angular/core'
import { Observable, Subscription } from 'rxjs'
import { Store } from '@ngrx/store'

import { AppState } from '../../reducers/'
import { BuilderStepComponent } from './step/builder.step'

@Component({
  selector: 'builder-view',
  styles: [ require('./builder.view.scss') ],
  template: require('./builder.view.html'),
})

export class BuilderViewComponent {
  pizzaObservable: Observable<any>
  pizzaSubscription: Subscription
  pizza: any

  constructor(
    private store: Store<AppState>) {

    this.pizzaObservable = this.store.select('pizza')
    this.pizzaSubscription = this.pizzaObservable.subscribe(pizza => this.pizza = pizza)
  }

  ngOnInit() {
    // this.pizzaService.stepObserver.subscribe(step => {
    //   this.router.navigate([`/builder/step/${step}`])
    // })
  }

  ngOnDestroy() {
    this.pizzaSubscription.unsubscribe()
  }
}
