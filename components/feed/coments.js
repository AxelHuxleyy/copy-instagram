import React from 'react';
import {View, StyleSheet, Text} from 'react-native'
const Comments = () => {
    return ( 
        <View style={style.container}>
            <View style={style.containerMyTtext}>
                <Text style={{fontWeight: 'bold'}}>Hanna</Text>
                <Text style={style.myText}>i like so much the soda of coca cola </Text>
            </View>
            <Text style={style.viewAll}>View all 210 comments</Text>
            <View style={style.contentText}>
                <Text style={style.commentProfile}>AxelHuxley</Text>
                <Text>🔥🔥🔥</Text>
            </View>
            
        </View>
     );
}


const style= StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 10
    },
    containerMyTtext:{
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap',
        fontSize: 15
    },
    myText:{
        fontSize: 15
    },
    viewAll:{
        fontSize: 15,
        color: 'gray'
    },
    comments:{
        display: 'flex',
        flexDirection: 'row',
    },
    contentText:{
        display: 'flex',
        flexDirection: 'row',
    },
    commentProfile:{
        fontWeight: 'bold'

    
    }
})
 
export default Comments;