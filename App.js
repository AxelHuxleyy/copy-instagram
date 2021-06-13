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


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#ffffff'/>

      <View style={styles.mainContainer}>
        <HeaderInstagram />
      </View>
      <ScrollView style={{backgroundColor: Colors.lighter}}>
        <Text>
          hola
        </Text>
        </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
 mainContainer:{
   height: '7%',
   backgroundColor: 'blue'
 }
});

export default App;
