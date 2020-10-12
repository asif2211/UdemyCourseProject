import { MEALS } from "../../data/dumydata";
import {TOGGLE_FAVORITES} from '../Action/meals';

const initialState = {
  meal: MEALS,
  filtersMeals: MEALS,
  favoritiesMeals: [],
};

const mealsReducer = (state=initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
        const existingIndex = state.filtersMeals.findIndex(meal=>meal.id===action.mealId);
        console.log(existingIndex);
        if(existingIndex>=0)
        {
          const updateFavMeals = [...state.favoritiesMeals];
          updateFavMeals.slice(existingIndex,1);
          return{...state, favoritiesMeals:updateFavMeals}
        }
        else{
          const meal = state.meal.find(meal => meal.id ===action.mealId);
          return {...state,favoritiesMeals:state.favoritiesMeals.cancat(meal)}
        }
      break;
  
    default:
       return state;
  }
  return state;
};

export default mealsReducer;