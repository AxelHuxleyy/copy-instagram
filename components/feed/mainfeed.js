import React from 'react';
import Profile from './profile'
import ImageFeed from './photo'
import Actions from './actions'
import Comments  from './coments';
import MyComment from './myComment';
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
  
const MainFeed = () => {
    return ( 
        <View style={styles.container}>
            <Profile/>
            <ImageFeed />
            <Actions/>
            <Text style={styles.likes}>1,023 likes</Text>
            <Comments/>
            <Text style={styles.timeAgo}>6 hours Ago</Text>
            
        </View>
     );
}
 const styles = StyleSheet.create({
     container:{
         display: 'flex',
         flexDirection: 'column',
         marginTop: 10
     },
     likes:{
         paddingHorizontal: 10,
         fontWeight: 'bold'
     },
     timeAgo:{
         color: 'gray',
         paddingHorizontal: 10,
        fontSize: 10
     }

 })
export default MainFeed;