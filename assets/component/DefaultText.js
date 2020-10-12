import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const DefaultText = (props)=>{
        return(
        <View style={styles.defaultText}>
            <Text>{props.children}</Text>
        </View>
        )}

export default DefaultText;

const styles = StyleSheet.create({
    defaultText:{
        fontFamily:'open-sans-bold',
        fontSize:20,
        
    }
})
