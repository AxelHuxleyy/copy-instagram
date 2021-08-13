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

import Icon from 'react-native-vector-icons/MaterialIcons';

const Profile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textProfile} >
                <Image style={styles.img} source={{uri: 'https://images.unsplash.com/photo-1619418170841-afea868fdc58?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'}}/>
                <Text style={styles.text}>Hanna</Text>
            </View>

            <Icon name='more-vert' color='black' size={28} />

        </View>
    );
}

const styles = StyleSheet.create({
    
    container:{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: '100%',
    },

    textProfile:{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center'

    },

    img:{
        width: 40,
        height: 40,
        borderRadius: 50      
      },
    
    text:{
        fontSize: 15,
        marginLeft: 10,
        marginTop: 6
    }

    
  });
export default Profile;