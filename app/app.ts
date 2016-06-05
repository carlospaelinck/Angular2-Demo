import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { Router, Routes, RouteSegment, ROUTER_DIRECTIVES } from '@angular/router'
import { IndexViewComponent } from './components/index/index.view'
import { HeaderView } from './components/navigation/header.view'
import { FooterView } from './components/navigation/footer.view'

@Component({
  selector: 'my-app',
  directives: [ ROUTER_DIRECTIVES, FooterView, HeaderView ],
  encapsulation: ViewEncapsulation.None,
  styles: [ require('./app.scss') ],
  template: `
    <div class="app-content">
      <header-view></header-view>
      <router-outlet></router-outlet>
      <footer-view></footer-view>
    <div>
  `
})

@Routes([
  { path: '/', component: IndexViewComponent },
  { path: '*', component: IndexViewComponent },
])

export class AppComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/'])
  }
}
