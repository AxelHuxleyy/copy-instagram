import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image
} from 'react-native';
const ImageFeed = () => {
    return ( 
        <View style={styles.container}>
            
            <Image style={styles.img} source={{uri: 'https://images.unsplash.com/photo-1622495488268-a2f56bf10385?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'}}/>
        </View>
     );
}
 
const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 'auto'
    },
    
    img:{
        width: '100%',
        height: 300
    }
})
export default ImageFeed;