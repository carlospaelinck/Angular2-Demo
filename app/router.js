import { IndexComponent } from 'components/index/index'
import { AboutComponent } from 'components/about/about'

export const router = {
  config: [
    { path: '/', component: IndexComponent, name: 'Index', useAsDefault: true },
    { path: '/about', component: AboutComponent, name: 'About' }
  ]
}
