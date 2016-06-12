import { bootstrap } from '@angular/platform-browser-dynamic'
import { AppComponent } from './app'
import { provide } from '@angular/core'
import { HTTP_PROVIDERS } from '@angular/http'
import { LocationStrategy, HashLocationStrategy } from '@angular/common'

import { provideRouter } from '@ngrx/router'
import { provideStore } from '@ngrx/store'
import { connectRouterToStore } from '@ngrx/router-store'
import { runEffects } from '@ngrx/effects'

import { routes } from './routes'
import reducer from './reducers/'
import actions from './actions/'
import effects from './effects/'

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  provideStore(reducer),
  runEffects(effects),
  provideRouter(routes, HashLocationStrategy),
  connectRouterToStore(),
  actions
])
