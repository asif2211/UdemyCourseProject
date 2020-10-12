import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch, ImageBackground } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../component/HeaderButton";
import { HeaderTitle } from "react-navigation-stack";
import { MEALS } from "../data/dumydata";
import MealList from "../component/MealList";
import Colors from "../contant/Colors";

const FilterSwitch = (props) => {
  return (
    <View style={styles.switch}>
      <Text style={styles.gluten}>{props.label}</Text>
      <Switch
        trackColor={{ false: "#FFF" }}
        trackColor={{ true: "green" }}
        thumbColor="white"
        value={props.Value}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FilterScreen = (props) => {
  const { navigation } = props;
  // step 1 first create compoent that Set current states
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVeganFree] = useState(false);
  const [isVegetarian, setIsVegetarianFree] = useState(false);
  // step 2 get value of current state change and create save filter component.
  const saveFilter = useCallback(() => {
    const appliedFilters = {
      isglutentfee: isGlutenFree,
      islactosefree: isLactoseFree,
      isvegan: isVegan,
      isvegetarian: isVegetarian,
    };
    console.log(appliedFilters);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);
  // set save parameter used for comunication between the navigation and componets
  useEffect(() => {
    navigation.setParams({ save: saveFilter });
  }, [saveFilter]);

  return (
    <View style={styles.screen}>
      <View style={{ width: "90%", marginVertical: 10 }}>
        <ImageBackground
          source={{
            uri:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0nQexy4an4dbkER0Ve6oPCHbJ1LGkgo_SMg&usqp=CAU",
          }}
          style={styles.Image}
        >
          <Text style={styles.title}>Filters Available / Restrictions</Text>
        </ImageBackground>
      </View>

      <FilterSwitch
        //this switch where filters is on or off when we on then value change and state is changed
        label="Gluten Free"
        Value={isGlutenFree}
        onChange={(newVlaue) => setIsGlutenFree(newVlaue)}
      />
      <FilterSwitch
        label="Lactose Free"
        Value={isLactoseFree}
        onChange={(newVlaue) => setIsLactoseFree(newVlaue)}
      />
      <FilterSwitch
        label="Vegan"
        Value={isVegan}
        onChange={(newVlaue) => setIsVeganFree(newVlaue)}
      />
      <FilterSwitch
        label="Vegetarian"
        Value={isVegetarian}
        onChange={(newVlaue) => setIsVegetarianFree(newVlaue)}
      />
    </View>
  );
};

FilterScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filters!!",
    // for navigation color
    headerStyle: {
      backgroundColor: Colors.primaryColor,
    },
    // for text color
    headerTintColor: "white",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    // this is right save button when filter is on and click on this save button that save the value of filters.
    headerRight:()=> (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={() => {
            navData.navigation.getParam("save");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ccc",
  },
  switch: {
    justifyContent: "space-between",
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    fontFamily: "open-sans-bold",
    backgroundColor: "white",
    borderColor: "white",
    borderRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    marginVertical: 10,
    shadowColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",

    borderColor: "white",
    borderRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowColor: "white",
    paddingHorizontal: 10,

    paddingHorizontal: 10,
    paddingVertical: 7,
    color: "white",
  },
  gluten: {
    fontFamily: "open-sans",
    fontSize: 20,
  },
  Image: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    overflow: "hidden",
  },
});

export default FilterScreen;
