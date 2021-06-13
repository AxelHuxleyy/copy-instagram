import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import HeaderInstagram from './components/header'
import Histories from './components/hiestories/histories'


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  return (
    < >
      <StatusBar barStyle='light-content' backgroundColor='#ffffff'/>

      <View style={styles.mainContainer}>
        <HeaderInstagram />
      </View>
      <Histories />
      <ScrollView style={{backgroundColor: Colors.lighter, flex: 1}}>
       
        <Text>
          hola
        </Text>
        </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
 mainContainer:{
   height: '9%',
   backgroundColor: 'white'
 },

 container:{

 
 }
});

export default App;
