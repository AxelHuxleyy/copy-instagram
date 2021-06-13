import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

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
  
  import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';


  const HeaderInstagram = () => {
      return ( 
          <View style={styles.header}>
            <Image source={require('../resource/images/instagram-logo-type.png')} style={styles.imageSize} />
            <View style={styles.icons}>
            <Icon name='ios-add-circle-outline' color='black' size={25} style={styles.indivicualIcons}/>
            <Icon name='heart-outline' color='black' size={25} style={styles.indivicualIcons}/>
            <Icon name='paper-plane-outline' color='black' size={25} style={styles.indivicualIcons}/>
            </View>
          </View>
       );
  }

  const styles = StyleSheet.create({
    
    header:{
        flex: 1,
        paddingTop: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 'auto',
        paddingHorizontal: 10
    },
    indivicualIcons:{
        marginHorizontal: 8
    },
    icons:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingTop: 5
    },
    
    imageSize:{
        width:130,
        height: 45
    }
  });
   
  export default HeaderInstagram;