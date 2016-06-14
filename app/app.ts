import { bootstrap } from '@angular/platform-browser-dynamic'
import { AppComponent } from './app.component'
import { provide } from '@angular/core'
import { HTTP_PROVIDERS } from '@angular/http'
import { LocationStrategy, HashLocationStrategy } from '@angular/common'

import { provideRouter } from '@ngrx/router'
import { provideStore } from '@ngrx/store'
import { connectRouterToStore } from '@ngrx/router-store'

import { routes } from './routes'
import reducer from './reducers'
import actions from './actions'

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  provideStore(reducer),
  provideRouter(routes, HashLocationStrategy),
  connectRouterToStore(),
  actions
])
