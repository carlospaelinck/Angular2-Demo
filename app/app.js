import { Component } from '@angular/core'
import { RouteConfig } from '@angular/router-deprecated'
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated'
import { router } from './router'

@Component({
  selector: 'my-app',
  directives: [ ROUTER_DIRECTIVES ],
  template: `
    <h1>Angular 2 Demo</h1>
    <a [routerLink]="['/Index']">Index</a>
    <a [routerLink]="['/About']">About</a>
    <router-outlet></router-outlet>
  `
})

@RouteConfig(router.config)

export class AppComponent {
  constructor() {
  }
}
