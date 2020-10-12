import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { MEALS } from "../data/dumydata";
import Colors from "../contant/Colors";
import { ScrollView } from "react-native-gesture-handler";
import {useSelector} from 'react-redux';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../component/HeaderButton";
const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};
const MealDetails = (props) => {
    const AvailableMeals = useSelector(
        // useSelector provide slice of states
        (state) => state.getReducerStateData.filtersMeals
      );
  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = AvailableMeals.find((meal) => meal.id === mealId);

  return (
    <ScrollView style={{ borderColor: "white" }}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.Image} />
      <View style={styles.details}>
        <Text style={{ fontFamily: "open-sans-bold" }}>
          {selectedMeal.duration}m
        </Text>
        <Text style={{ fontFamily: "open-sans-bold" }}>
          {selectedMeal.complexity.toUpperCase()}
        </Text>
        <Text style={{ fontFamily: "open-sans-bold" }}>
          {selectedMeal.affordability.toUpperCase()}
        </Text>
      </View>

      <View>
        <Text style={styles.title}>Ingrdient</Text>
        {selectedMeal.ingredients.map((ingredient) => (
          <ListItem>{ingredient}</ListItem>
        ))}
        <Text style={styles.title}>Steps</Text>

        {selectedMeal.steps.map((step) => (
          <ListItem>{step}</ListItem>
        ))}
      </View>
    </ScrollView>
  );
};

MealDetails.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerStyle: {
      backgroundColor: Colors.primaryColor,
    },
    headerTintColor: "white",
    headerRight:()=> (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Save"
            iconName="ios-star"
            onPress={() => {
              
            }}
          />
        </HeaderButtons>
      ),
  };
};
const styles = StyleSheet.create({
  Image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 5,
    marginHorizontal: 12,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
  },
});

export default MealDetails;
