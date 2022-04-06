import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, FlatList, SafeAreaView} from 'react-native';
import React, { useState, useEffect } from 'react';
import PokeApi, {getPokemons} from "../Api/PokeApi"
import TitlePokemon from "../Components/TitlePokemon";
import Navigation from "../Navigation/Navigation";




export default function Home(props) {

    const { navigation, ...restProps} = props

    const [listPokemon, setListPokemon] = useState([])
    const [nextPage, setNextPage] = useState("https://pokeapi.co/api/v2/pokemon")


    useEffect(() => {
        loadPokemon(nextPage)
    }, []);

    const loadPokemon = (url) => {
        getPokemons(url).then(datas => {
            setListPokemon([...listPokemon, ...datas.results])
            setNextPage(datas.next)
        });
    }

    return (
        <View style={styles.container}>
            <FlatList data={listPokemon}
                      numColumns={3}
                      renderItem={({item}) => <TitlePokemon name={item.name} url={item.url} navigation={navigation}/>}
                      keyExtractor={(item) => item.name}
                      onEndReachedThreshold={0.5}
                      onEndReached={() => {
                          loadPokemon(nextPage)
                      }}/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#99AAFF",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: 'black',
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 22,
        color: 'white',
    },
});
