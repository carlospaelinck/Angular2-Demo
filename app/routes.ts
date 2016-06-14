import { Routes } from '@ngrx/router'

/* Guards */
import { AuthenticationGuard } from './guards/auth'

/* Components */
import { IndexViewComponent } from './components/index/index.view'
import { BuilderViewComponent } from './components/builder/builder.view'
import { CartViewComponent } from './components/cart/cart.view'

export const routes: Routes = [
  {
    path: '/',
    component: IndexViewComponent
  },
  {
    path: '/builder',
    guards: [ AuthenticationGuard ],
    component: BuilderViewComponent
  },
  {
    path: '/cart',
    component: CartViewComponent
  }
]
