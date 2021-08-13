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

import Icon from 'react-native-vector-icons/FontAwesome';

const Actions = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerItems}>
            <Icon name='heart-o' color='black' size={28} />
            <Icon name='comment-o' style={styles.items} color='black' size={28} />
            <Icon name='paper-plane-o' style={styles.items} color='black' size={28} />
            </View>
            <View>
            <Icon name='bookmark-o'  color='black' size={28} />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    items: {
        marginLeft: 15,
    },

    containerItems:{
        flexDirection: 'row'
    }


})
export default Actions;