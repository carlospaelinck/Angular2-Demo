const crust = [ 'Thin', 'Pan', 'Wheat', 'Gluten Free' ]
const cheese = [ 'None', 'Light', 'Standard', 'Extra' ]
const sauce = [ 'Marinara', 'Garlic Parmesan', 'Barbeque', 'Buffalo' ]
const meat = [ 'Pepperoni', 'Sausage', 'Bacon', 'Ham', 'Chicken' ]
const veggies = [ 'Spinach', 'Red Onions', 'Banana Peppers', 'Black Olives', 'Mushrooms' ]

export const ingredients = { crust, cheese, sauce, meat, veggies }
export const ingredientsForStep = step => ingredients[step]
