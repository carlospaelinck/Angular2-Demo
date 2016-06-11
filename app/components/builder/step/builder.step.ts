import { Component } from '@angular/core'

@Component({
  selector: 'builder-step',
  styles: [ require('./builder.step.scss') ],
  template: require('./builder.step.html')
})

export class BuilderStepComponent {

  constructor() {
  }

  proceedToNextStep() {
  }

  returnToPreviousStep() {
  }
}
