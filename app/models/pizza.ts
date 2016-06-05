export const Crust = [ 'Thin', 'Pan', 'Wheat', 'Gluten Free' ]
export const Cheese = [ 'None', 'Light', 'Standard', 'Extra' ]
export const Sauce = [ 'Marinara', 'Garlic Parmesan', 'Barbeque', 'Buffalo' ]
export const Meat = [ 'Pepperoni', 'Sausage', 'Bacon', 'Ham' ]
export const Veggies = [ 'Spinach', 'Red Onions', 'Banana Peppers', 'Black Olives', 'Mushrooms' ]

export class Pizza {
  crust = 'Pan'
  cheese = 'Standard'
  sauce = 'Marinara'
  meat = []
  veggies = []

  calculateCost(): number {
    let cost = 7.99
    cost += this.meat.length * 2.0
    cost += this.veggies.length * 2.0
    return cost
  }
}
