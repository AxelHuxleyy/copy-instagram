import React from 'react';
import IndividualStory from './individualhistorie'

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    ImageBackground
  } from 'react-native';
  
  import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';


const Histories = () => {
    return ( 
        <View style={styles.containerHistories}  >
            <ScrollView contentContainerStyle={styles.scrollView}  horizontal={true} showsHorizontalScrollIndicator={true} >
              {/**
               * My historie
               */}
                <View  style={styles.storie}>
                    <View >
                      <Image style={styles.img} source={{uri: 'https://images.unsplash.com/photo-1619418170841-afea868fdc58?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'}}>
                        
                      </Image>
                    </View>
                    <View style={styles.texthisotire}>
                      <Text>
                        Your story
                      </Text>
                    </View>
                </View>

                <IndividualStory  />
                <IndividualStory />
                <IndividualStory />
                <IndividualStory />

                

            </ScrollView>
            
        </View>
     );
}

const styles = StyleSheet.create({
    containerHistories:{
      backgroundColor: 'white',
      paddingTop:1,
      paddingBottom: 5,
    },

    storie:{
      height: '100%',
      marginLeft: 15
    },

    texthisotire:{
        marginTop: 5,
    },

    img:{
      width: 70,
      height: 70,
      borderRadius: 50      
    },

    scrollView:{
      display: 'flex'
    }
 
});
export default Histories;