import { ActionReducer, Action } from '@ngrx/store'
import { PizzaActions } from '../actions/pizza'
const { without } = require('lodash')

const defaultState = {
  ingredients: {
    crust: 'Pan',
    cheese: 'Standard',
    sauce: 'Marinara',
    meat: [],
    veggies: []
  },
  price: 7.99,
  step: 'crust'
}

export const steps = Object.keys(defaultState.ingredients)

export const pizzaReducer: ActionReducer<Object> = (state = defaultState, action: Action) => {
  switch (action.type) {
    case PizzaActions.CREATE_NEW_PIZZA: {
      return Object.assign({}, defaultState)
    }

    case PizzaActions.UPDATE_PIZZA: {
      let updatedIngredient = {}
      const currentSelection = state.ingredients[state.step]

      if (currentSelection instanceof Array && action.payload.checked) {
        updatedIngredient[state.step] = [ ...currentSelection, action.payload.value ]
      } else if (currentSelection instanceof Array && !action.payload.checked) {
        updatedIngredient[state.step] = without(currentSelection, action.payload.value)
      } else {
        updatedIngredient[state.step] = action.payload.value
      }

      const ingredients = Object.assign({}, state.ingredients, updatedIngredient)
      const price = 7.99 + ingredients.meat.length * 1.99 + ingredients.veggies.length * 0.99
      return Object.assign({}, state, { ingredients, price })
    }

    case PizzaActions.NEXT_STEP: {
      const index = steps.indexOf(state.step) + 1
      const step = steps[Math.min(index, steps.length - 1)]
      return Object.assign({}, state, { step })
    }

    case PizzaActions.PREVIOUS_STEP: {
      const index = steps.indexOf(state.step) - 1
      const step = steps[Math.max(index, 0)]
      return Object.assign({}, state, { step })
    }

    default: return state
  }
}
