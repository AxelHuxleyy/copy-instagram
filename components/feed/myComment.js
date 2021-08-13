import React, {useState} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image
} from 'react-native';

const MyComment = () => {
    const [text, setText] = useState('')
    return ( 
        <View style={styles.mainContainer}>
            <Image style={styles.img} source={{uri: 'https://images.unsplash.com/photo-1622495488268-a2f56bf10385?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'}}/>
            <TextInput 
            style={styles.input}
            placeholder="Add a comment"
            />
        </View>
     );
}
 
const styles = StyleSheet.create({
    mainContainer:{
        display: 'flex',
        flexDirection: 'row',
        height: 40,
        marginTop: 2,
        marginLeft: 10
        
    },
    img:{
        width: 35,
        height: 35,
        borderRadius: 50   
    },
    input:{
        marginLeft: 3,
        height: "100%",
        width: "90%",
        color:'gray'
    }
})
export default MyComment;