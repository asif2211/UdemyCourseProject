import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet,ImageBackground} from 'react-native';
import DefaultText from './DefaultText';

const MealItem = (props)=>{
        return (
        <View style={styles.MealItem}> 
            <TouchableOpacity onPress={props.onSelect}>
                <View style={styles.container}>
                        
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                        <ImageBackground source={{uri:props.image}} style={styles.Image}>
                            <Text style={styles.title} numberOfLines={1}> {props.title} </Text>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow, ...styles.mealDetails}}>
                        <Text style={{fontFamily:'open-sans-bold'}}>{props.duration}m</Text>
                        <Text style={{fontFamily:'open-sans-bold'}}>{props.complexity.toUpperCase()}</Text>
                        <Text style={{fontFamily:'open-sans-bold'}}>{props.affordability.toUpperCase()}</Text>
                      
                    </View>
                </View>
            </TouchableOpacity>
        </View>
        );
}

export default MealItem;

const styles = StyleSheet.create({
    MealItem:{
        height:200,
        width:'100%',
        backgroundColor:'white',
        borderRadius:10,
        overflow:'hidden'
    },
    container:{
        shadowColor:'black',
        shadowRadius:20,
        shadowOffset:{width:0, height:2},
        shadowOpacity:.26,
        
        
    },
    mealRow:{
        flexDirection:'row',
    },

    mealHeader:{
        height:'90%',
        
    },
    mealDetails:{
        justifyContent:'space-between',
        paddingHorizontal:5,
        
    },
    Image:{
        height:'100%',
        width:'100%',
        justifyContent:'flex-end',  
    },
    title:{
        color:'white',
        backgroundColor:'rgba(0,0,0,.5)',
        fontFamily:'open-sans-bold',
        fontSize:18,
        paddingHorizontal:5,
        paddingVertical:12,
        textAlign:'center',
    }
})