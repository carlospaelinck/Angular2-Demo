import { PizzaActions } from './pizza'
import { OrderActions } from './order'

/* Export individual actions for component consumption
 * and an array of all actions for the Angular bootstrap function
 * as the default export. */
export { PizzaActions, OrderActions }
export default [ PizzaActions, OrderActions ]
