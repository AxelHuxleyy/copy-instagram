import React, {useEffect, useState} from 'react';
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


const Individualstory = () => {

    const [dataUrl, setUrl] = useState('https://images.unsplash.com/photo-1619418170841-afea868fdc58?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        return fetch("https://picsum.photos/200")
              .then((response) => 
              {
                  console.log(response.url)
                  setUrl(response.url)
              })
            }
    

    return (
        <View style={styles.storie}>
            <View >
                <Image style={styles.img} source={{ uri: dataUrl }}>

                </Image>
            </View>
            <View style={styles.texthisotire}>
                <Text>
                    Your story
                </Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({

    containerHistories:{
        paddingTop:1,
        paddingBottom: 5,
        paddingHorizontal:5,
      },
  
      storie:{
        height: '100%',
        marginLeft: 17
      },
  
      texthisotire:{
          marginTop: 5,
      },
  
      img:{
        width: 70,
        height: 70,
        borderRadius: 50      
      }
   
});
export default Individualstory;