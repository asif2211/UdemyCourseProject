import React from 'react';
import {View , Text, StyleSheet} from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../component/HeaderButton";
import { HeaderTitle } from 'react-navigation-stack';
import {MEALS} from '../data/dumydata';
import MealList from '../component/MealList';
const HomeScreen = props => {
        return(<View style={styles.screen}>
            <Text>Welcome Home</Text>
        </View>)
  };

  HomeScreen.navigationOptions = navData => {
    return {
      headerTitle: 'Home Screen',
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
      )
    };
  };
  
const styles = StyleSheet.create({
    screen :{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    }
});

export default HomeScreen;