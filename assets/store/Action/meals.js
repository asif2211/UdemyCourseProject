export const  TOGGLE_FAVORITIES = "TOGGLE_FAVORITIES";

export const toggleFavorites = (id)=>{
    return {type:TOGGLE_FAVORITIES, mealId : id}
} 