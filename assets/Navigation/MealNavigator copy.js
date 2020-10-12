import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import CategoriesMeals from '../Screens/CategoriesMeals';
import MealDetails from '../Screens/MealDetails';
import CategoriesScree from '../Screens/CategorisScreen';
const Stack = createStackNavigator()
const screen = {
  mealScreen : MealDetails,
}
function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' component={CategoriesScree} />
        <Stack.Screen name='Meal' component={MealDetails} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator