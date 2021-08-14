import React from 'react';
import { useState, useEffect } from 'react';
import {View, StyleSheet, TextInput} from 'react-native'
const BarSearch = () => {
    const [valor, setValor] = useState("")
    return ( 
        <View style={styles.bar}>
            <TextInput
            placeholder="🔍 Search"
            value={valor}
            style={styles.SearchText}
            placeholderTextColor='gray'
            />
        </View>
     );
}
 
const styles = StyleSheet.create(
    {
        bar:{
            height: 50,
            width: "100%",
            padding: 5,
            backgroundColor:"white"
        },
        SearchText:{
            backgroundColor:"#f6f6f6",
            borderRadius: 100, 
            color: 'black',
            padding: 5

        }
    }
)
export default BarSearch;