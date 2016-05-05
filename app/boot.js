import './shim.js'

import { bootstrap } from '@angular/platform-browser-dynamic'
import { AppComponent } from './app'
import { provide } from '@angular/core'
import { HTTP_PROVIDERS } from '@angular/http'
import { ROUTER_PROVIDERS } from '@angular/router-deprecated'
import { LocationStrategy, HashLocationStrategy } from '@angular/common'

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy })
])

console.debug('App Running :)')
