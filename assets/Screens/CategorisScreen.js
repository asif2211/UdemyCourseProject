import React from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import "react-native-gesture-handler";
import { CATEGORIES } from "../data/dumydata";
import Colors from "../contant/Colors";
import CategoriesGridTile from "../component/CategoriesGridTile";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../component/HeaderButton";
const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoriesGridTile
        title={itemData.item.title}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CategoryMeal",
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
        color={itemData.item.color}
        image={itemData.item}
      />
    );
  };
  return (
    <FlatList data={CATEGORIES} numColumns={2} renderItem={renderGridItem} />
  );
};

CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Meal Category",
    //drawer step 3
    // CustomHeaderButton coming from Header Button component page
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
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CategoriesScreen;
