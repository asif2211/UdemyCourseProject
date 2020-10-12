import React, { version } from 'react';
import {View, Text ,TouchableOpacity, StyleSheet, Platform,TouchableNativeFeedback,ImageBackground} from 'react-native';


const CategoriesGridTile = (props)=>{
    let Touchablecmp = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version>=21)
    {
        Touchablecmp = TouchableNativeFeedback;
    }
        return(
            <View style={styles.GridStyle}>
                <Touchablecmp onPress={
                    props.onSelect
                }
                style={{flex:1}}
                >        
                    <View  style={{...styles.container, ...{backgroundColor:props.color}}}>
                        
                        <Text style={styles.title}>{props.title}</Text>
                        
                    </View>
                </Touchablecmp>
            </View>
        );
}

export default CategoriesGridTile;

const styles = StyleSheet.create({
    GridStyle:{
        flex:1,
        margin:15,
        height:150,
    },
    container:{
        flex:1,
        backgroundColor:'#FFF',
        shadowColor:'#DAB788',
        shadowOffset:{width:0, height:2},
        shadowRadius:10,
        shadowOpacity:.30,
        elevation:6,
        borderRadius:10,
        padding:15,
        borderColor:'#DAB788',
        borderWidth:1,
        justifyContent:'flex-end',
        alignItems:'flex-end'
        
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:20
    },
    Image:{
        width:'100%',
        height:'100%'
        
    }
})