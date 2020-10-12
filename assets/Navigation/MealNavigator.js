import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createBottomTabNavigator, BottomTabBar } from "react-navigation-tabs";
import CategoriesMeals from "../Screens/CategoriesMeals";
import CategorisScreen from "../Screens/CategorisScreen";
import MealDetails from "../Screens/MealDetails";
import FavoritesScreen from "../Screens/FavoritesScreen";
import FilterScreen from "../Screens/FilterScreen";
import Homescreen from "../Screens/HomeScreen";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../contant/Colors";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import { Platform, Text } from "react-native";
import HomeScreen from "../Screens/HomeScreen";
import { FontDisplay } from "expo-font";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  headerTitle: "A Screen",
};
// stack navigator used for navigation
const MealNavigator = createStackNavigator(
  {
    Categories: CategorisScreen,
    MealDetail: MealDetails,
    CategoryMeal: {
      screen: CategoriesMeals,
      Filters: FilterScreen,
    },
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);
// for showing Favorites in top navigations
const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetails,
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const HomePage = createStackNavigator(
  {
    HomePage: HomeScreen,
    Favorites: FavoritesScreen,
    MealDetail: MealDetails,
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions,
  }
);
const tabScreenConfig = {
  // for bottom tab with name Meals and Favorites.
  Meals: {
    screen: MealNavigator,
    navigationOptions: {
      tabBarIcon: (tabinfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabinfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel: (
        <Text style={{ fontFamily: "open-sans-bold" }}>Meals!!!</Text>
      ),
    },
  },

  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarLabel: "Favorites!",
      tabBarOptions: {
        fontFamily: "open-sans",
      },
      tabBarIcon: (tabinfo) => {
        return <Ionicons name="ios-star" size={30} color={tabinfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel: (
        <Text style={{ fontFamily: "open-sans-bold" }}>Favorites!!!</Text>
      ),
    },
  },
};

const MealFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: Colors.primaryColor,
        shifting: true,
      })
    : createBottomTabNavigator(
        tabScreenConfig,

        {
          tabBarOptions: {
            //for Ios bottom tab color and font
            activeTintColor: Colors.primaryColor,
            labelStyle: {
              fontFamily: "open-sans-bold",
            },
          },
        }
      );
// drawer step 2
const FilterNavigtor = createStackNavigator({
  Filters: {
    screen: FilterScreen,
    navigationOptions: {
      tabBarColor: Colors.primaryColor,
    },
  },
});

//drawer step 1
const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealFavTabNavigator,
      navigationOptions: {
        // for drawer upto you  text.
        drawerLabel: "Meals",
      },
    },
    Filters: {
      screen: FilterNavigtor,
      navigationOptions: {
        drawerLabel: "Filters!!!",
      },
    },
  },
  {
    // for drawer color
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: "open-sans-bold",
      },
    },
  }
);

export default createAppContainer(MainNavigator);
