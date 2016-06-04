import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { Router, Routes, RouteSegment, ROUTER_DIRECTIVES } from '@angular/router'
import { DashboardViewComponent } from './components/dashboard/dashboard.view'

@Component({
  selector: 'my-app',
  directives: [ ROUTER_DIRECTIVES ],
  encapsulation: ViewEncapsulation.None,
  styles: [ require('./app.scss') ],
  template: `
    <div class="app-content">
      <router-outlet></router-outlet>
    <div>
  `
})

@Routes([
  { path: '/dashboard', component: DashboardViewComponent },
  { path: '*', component: DashboardViewComponent },
])

export class AppComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/dashboard'])
  }
}
