import { Component, OnInit, ViewEncapsulation } from '@angular/core'

import { IndexViewComponent } from './components/index/index.view'
import { BuilderViewComponent } from './components/builder/builder.view'

import { HeaderView } from './components/navigation/header.view'
import { FooterView } from './components/navigation/footer.view'

@Component({
  selector: 'my-app',
  directives: [ FooterView, HeaderView ],
  encapsulation: ViewEncapsulation.None,
  styles: [ require('./app.scss') ],
  template: `
    <header-view></header-view>
    <div class="app-content">
      <route-view></route-view>
    <div>
    <footer-view></footer-view>
  `
})

export class AppComponent {}
