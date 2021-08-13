import React from 'react';
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
 
  
import HeaderInstagram from '../components/header'
import Histories from '../components/hiestories/histories'
import Feed from '../components/feed/mainfeed'

const HomeScreen = () => {
    return (

        < >
            <StatusBar barStyle='light-content' backgroundColor='#ffffff' />

            <View style={styles.mainContainer}>
                <HeaderInstagram />
            </View>
            <Histories />
            <ScrollView style={styles.scrollViewStyle}>
                <Feed />

            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        height: '9%',
        backgroundColor: 'white'
    },

    scrollViewStyle: {
        backgroundColor: 'white',
        flex: 1
    }
});

export default HomeScreen;