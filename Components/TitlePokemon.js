import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from 'react';
import {getPokemons} from "../Api/PokeApi.js"
import baseImage from "../assets/pokeball.png"


export default function TitlePokemon(props) {

    const { url, name, navigation, ...restProps } = props

    const [pokemonDatas, setPokemonDatas] = useState([])
    const [pokemonImg, setPokemonImg] = useState(null)

    if(pokemonDatas.length === 0) {

        getPokemons(url).then(data => {
            setPokemonDatas(data)
            setPokemonImg(data.sprites.front_default)
        })
    }

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("PokemonDetail")}>
            <View style={styles.shadowProp}>
                    {
                    pokemonImg ?
                    ( <Image style={styles.image} source={{uri : pokemonImg }} /> ):
                    ( <Image style={styles.image} source={ baseImage } /> )
                    }
            </View>
            <View style={styles.containerInfo}>
                <Text style={styles.text}>{name}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "33%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20

    },
    button: {
        backgroundColor: "red",
    },
    image: {
        width: 100,
        height: 100,
        backgroundColor: "white",
        borderRadius: 300,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.4,
        shadowRadius: 3,
    },
    text: {
        color: "white",
        textTransform: "uppercase",
        fontWeight: "bold",
        marginTop: 6
    }
});

//<Image source={{ uri: url }} />