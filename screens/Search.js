import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native'
import axios from 'axios';
import BarSearch from '../components/Search/barSearch'
const Search = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://picsum.photos/v2/list?page=2&limit=30").then((response) => {
            console.log(response.data)
            setData(response.data)
            response.data.map(date => {
                console.log(date.download_url)
            })
        })
    }, [])

    return (

        <>
            <BarSearch />
            <View style={styles.mainContainer}>



                {data ?
                    <FlatList
                        data={data}
                        renderItem={({ item }) => <Image style={styles.img} source={{ uri: item.download_url }} />}
                        numColumns={3}


                    /> :
                    <Text>Loading...</Text>
                }

            </View>
        </>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column'
    },
    img: {
        width: 140,
        height: 140,
        margin: 1
    },

    listView: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        flex: 1
    }
})

export default Search;