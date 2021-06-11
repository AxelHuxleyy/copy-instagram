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
                <Text>
                    icono 1
                </Text>
                <Text>
                    icono 2
                </Text>
                <Text>
                    icono 3
                </Text>
            </View>
          </View>
       );
  }

  const styles = StyleSheet.create({
    
    header:{
        flex: 1,
        padding:10,
        backgroundColor: Colors.white,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    icons:{
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    
    imageSize:{
        width:90,
        height: 30
    }
  });
   
  export default HeaderInstagram;