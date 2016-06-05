import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { Router, Routes, ROUTER_DIRECTIVES } from '@angular/router'
import { IndexViewComponent } from './components/index/index.view'
import { BuilderViewComponent } from './components/builder/builder.view'
import { HeaderView } from './components/navigation/header.view'
import { FooterView } from './components/navigation/footer.view'

@Component({
  selector: 'my-app',
  directives: [ ROUTER_DIRECTIVES, FooterView, HeaderView ],
  encapsulation: ViewEncapsulation.None,
  styles: [ require('./app.scss') ],
  template: `
    <header-view></header-view>
    <div class="app-content">
      <router-outlet></router-outlet>
    <div>
    <footer-view></footer-view>
  `
})

@Routes([
  { path: '/', component: IndexViewComponent },
  { path: '/builder', component: BuilderViewComponent },
  { path: '*', component: IndexViewComponent },
])

export class AppComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/'])
  }
}
