const Ingredients = {
  amounts: [
    { name: 'light', quantity: 1 },
    { name: 'regular', quantity: 2 },
    { name: 'extra', quantity: 3 },
    { name: 'double', quantity: 4 }
  ],
  options: [
    {
      name: 'Egg',
      nutrition: {
        Calories: { value: 91, unit: 'kcal' },
        Sodium: { value: 88, unit: 'mg' },
        'Total Fat': { value: 7, unit: 'g' },
        Potassium: { value: 81, unit: 'mg' },
        Saturated: { value: 2, unit: 'g' },
        'Total Carbs': { value: 0, unit: 'g' },
        Polyunsaturated: { value: 2, unit: 'g' },
        'Dietary Fiber': { value: 0, unit: 'g' },
        Monounsaturated: { value: 3, unit: 'g' },
        Sugars: { value: 1, unit: 'g' },
        Trans: { value: 0, unit: 'g' },
        Protein: { value: 6, unit: 'g' },
        Cholesterol: { value: 169, unit: 'mg' }
      }
    },
    {
      name: 'Cheese',
      nutrition: {
        Calories: { value: 115, unit: 'kcal' },
        Sodium: { value: 183, unit: 'mg' },
        'Total Fat': { value: 10, unit: 'g' },
        Potassium: { value: 22, unit: 'mg' },
        Saturated: { value: 5, unit: 'g' },
        'Total Carbs': { value: 0, unit: 'g' },
        Polyunsaturated: { value: 0, unit: 'g' },
        'Dietary Fiber': { value: 0, unit: 'g' },
        Monounsaturated: { value: 2, unit: 'g' },
        Sugars: { value: 0, unit: 'g' },
        Trans: { value: 0, unit: 'g' },
        Protein: { value: 7, unit: 'g' },
        Cholesterol: { value: 29, unit: 'mg' }
      }
    },
    {
      name: 'Bacon',
      nutrition: {
        Calories: { value: 90, unit: 'kcal' },
        Sodium: { value: 300, unit: 'mg' },
        'Total Fat': { value: 7, unit: 'g' },
        Potassium: { value: 0, unit: 'mg' },
        Saturated: { value: 3, unit: 'g' },
        'Total Carbs': { value: 0, unit: 'g' },
        Polyunsaturated: { value: 0, unit: 'g' },
        'Dietary Fiber': { value: 0, unit: 'g' },
        Monounsaturated: { value: 0, unit: 'g' },
        Sugars: { value: 0, unit: 'g' },
        Trans: { value: 0, unit: 'g' },
        Protein: { value: 6, unit: 'g' },
        Cholesterol: { value: 20, unit: 'mg' }
      }
    },
    {
      name: 'Potatoes',
      nutrition: {
        Calories: { value: 164, unit: 'kcal' },
        Sodium: { value: 388, unit: 'mg' },
        'Total Fat': { value: 5, unit: 'g' },
        Potassium: { value: 451, unit: 'mg' },
        Saturated: { value: 1, unit: 'g' },
        'Total Carbs': { value: 28, unit: 'g' },
        Polyunsaturated: { value: 0, unit: 'g' },
        'Dietary Fiber': { value: 3, unit: 'g' },
        Monounsaturated: { value: 3, unit: 'g' },
        Sugars: { value: 0, unit: 'g' },
        Trans: { value: 0, unit: 'g' },
        Protein: { value: 3, unit: 'g' },
        Cholesterol: { value: 0, unit: 'mg' }
      }
    },
    {
      name: 'Green Chili',
      nutrition: {
        Calories: { value: 29, unit: 'kcal' },
        Sodium: { value: 552, unit: 'mg' },
        'Total Fat': { value: 0, unit: 'g' },
        Potassium: { value: 157, unit: 'mg' },
        Saturated: { value: 0, unit: 'g' },
        'Total Carbs': { value: 6, unit: 'g' },
        Polyunsaturated: { value: 0, unit: 'g' },
        'Dietary Fiber': { value: 2, unit: 'g' },
        Monounsaturated: { value: 0, unit: 'g' },
        Sugars: { value: 0, unit: 'g' },
        Trans: { value: 0, unit: 'g' },
        Protein: { value: 1, unit: 'g' },
        Cholesterol: { value: 0, unit: 'mg' }
      }
    },
    {
      name: 'Jalapeno',
      nutrition: {
        Calories: { value: 26, unit: 'kcal' },
        Sodium: { value: 3, unit: 'mg' },
        'Total Fat': { value: 0, unit: 'g' },
        Potassium: { value: 223, unit: 'mg' },
        Saturated: { value: 0, unit: 'g' },
        'Total Carbs': { value: 6, unit: 'g' },
        Polyunsaturated: { value: 0, unit: 'g' },
        'Dietary Fiber': { value: 3, unit: 'g' },
        Monounsaturated: { value: 0, unit: 'g' },
        Sugars: { value: 4, unit: 'g' },
        Trans: { value: 0, unit: 'g' },
        Protein: { value: 1, unit: 'g' },
        Cholesterol: { value: 0, unit: 'mg' }
      }
    },
    {
      name: 'Sausage',
      nutrition: {
        Calories: { value: 150, unit: 'kcal' },
        Sodium: { value: 470, unit: 'mg' },
        'Total Fat': { value: 14, unit: 'g' },
        Potassium: { value: 0, unit: 'mg' },
        Saturated: { value: 5, unit: 'g' },
        'Total Carbs': { value: 3, unit: 'g' },
        Polyunsaturated: { value: 0, unit: 'g' },
        'Dietary Fiber': { value: 0, unit: 'g' },
        Monounsaturated: { value: 0, unit: 'g' },
        Sugars: { value: 3, unit: 'g' },
        Trans: { value: 0, unit: 'g' },
        Protein: { value: 5, unit: 'g' },
        Cholesterol: { value: 30, unit: 'mg' }
      }
    },
    {
      name: 'Chorizo',
      nutrition: {
        Calories: { value: 150, unit: 'kcal' },
        Sodium: { value: 640, unit: 'mg' },
        'Total Fat': { value: 13, unit: 'g' },
        Potassium: { value: 0, unit: 'mg' },
        Saturated: { value: 5, unit: 'g' },
        'Total Carbs': { value: 4, unit: 'g' },
        Polyunsaturated: { value: 0, unit: 'g' },
        'Dietary Fiber': { value: 0, unit: 'g' },
        Monounsaturated: { value: 0, unit: 'g' },
        Sugars: { value: 1, unit: 'g' },
        Trans: { value: 0, unit: 'g' },
        Protein: { value: 6, unit: 'g' },
        Cholesterol: { value: 40, unit: 'mg' }
      }
    },
    {
      name: 'Beans',
      nutrition: {
        Calories: { value: 70, unit: 'kcal' },
        Sodium: { value: 393, unit: 'mg' },
        'Total Fat': { value: 0, unit: 'g' },
        Potassium: { value: 280, unit: 'mg' },
        Saturated: { value: 0, unit: 'g' },
        'Total Carbs': { value: 9, unit: 'g' },
        Polyunsaturated: { value: 0, unit: 'g' },
        'Dietary Fiber': { value: 3, unit: 'g' },
        Monounsaturated: { value: 0, unit: 'g' },
        Sugars: { value: 1, unit: 'g' },
        Trans: { value: 0, unit: 'g' },
        Protein: { value: 4, unit: 'g' },
        Cholesterol: { value: 0, unit: 'mg' }
      }
    },
    {
      name: 'Tortilla',
      nutrition: {
        Calories: { value: 170, unit: 'kcal' },
        Sodium: { value: 440, unit: 'mg' },
        'Total Fat': { value: 3, unit: 'g' },
        Potassium: { value: 0, unit: 'mg' },
        Saturated: { value: 1, unit: 'g' },
        'Total Carbs': { value: 30, unit: 'g' },
        Polyunsaturated: { value: 0, unit: 'g' },
        'Dietary Fiber': { value: 3, unit: 'g' },
        Monounsaturated: { value: 0, unit: 'g' },
        Sugars: { value: 1, unit: 'g' },
        Trans: { value: 0, unit: 'g' },
        Protein: { value: 4, unit: 'g' },
        Cholesterol: { value: 0, unit: 'mg' }
      }
    }
  ]
}
export default Ingredients
