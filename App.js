import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import MealNavigator from "./assets/Navigation/MealNavigator";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import mealReducers from "./assets/store/reducer/meal";

const rootReducers = combineReducers({
  // reducer get states and update its and pass it to store
  getReducerStateData: mealReducers,
});
// store get state from stores
const store = createStore(rootReducers);

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return (
    
    <Provider store={store}>
      <MealNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff1493",
    alignItems: "center",
    justifyContent: "center",
  },
});
