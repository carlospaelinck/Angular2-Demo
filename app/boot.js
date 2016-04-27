import './shim.js'

import { bootstrap } from 'angular2/platform/browser'
import { AppComponent } from './app'
import { provide } from 'angular2/core'
import { HTTP_PROVIDERS } from 'angular2/http'
import { ROUTER_PROVIDERS } from 'angular2/router'
import { LocationStrategy, HashLocationStrategy } from 'angular2/platform/common'

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy })
])
