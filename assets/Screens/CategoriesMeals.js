import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { CATEGORIES } from "../data/dumydata";
import { MEALS } from "../data/dumydata";
import Colors from "../contant/Colors";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";
import MealItem from "../component/MealItem";
import { useSelector } from "react-redux";

const CategoriesMeals = (props) => {
  const catId = props.navigation.getParam("categoryId");

  console.log(catId);
  const AvailableMeals = useSelector(
    // useSelector provide slice of states
    (state) => state.getReducerStateData.filtersMeals
  );
  const displayedMeal = AvailableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  console.log(displayedMeal);
  const renderMealItem = (itemData) => {
    return (
      <View style={styles.screen}>
        <MealItem
          title={itemData.item.title}
          duration={itemData.item.duration}
          complexity={itemData.item.complexity}
          affordability={itemData.item.affordability}
          image={itemData.item.imageUrl}
          onSelect={() => {
            props.navigation.navigate({
              routeName: "MealDetail",
              params: {
                mealId: itemData.item.id,
              },
            });
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeal}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

CategoriesMeals.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: selectedCategory.color,
    },
    headerTintColor: "white",
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 7,
  },
});

export default CategoriesMeals;
