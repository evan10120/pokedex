import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import {getPokemons} from "../Api/PokeApi";
import React, {useState} from "react";
import baseimage from "../assets/icon.png";


export default function PokemonDetail(props) {

    const {navigation, route, ...restProps} = props
    const {pokemonDatas} = route.params
    console.log(pokemonDatas.name)
    const ImagePokemon = pokemonDatas.sprites.front_default


    const PokemonAbilities = pokemonDatas.abilities.map((item, index) => {
        console.log(item.ability.name);
        return <Text key={index}>{item.ability.name}</Text>;
    });

    return (
        /* <Text>Pokemon details</Text>*/

        <View style={styles.BlockDetails}>

            { ImagePokemon ?
                ( <Image style={styles.images} source={{uri : ImagePokemon}} /> ):
                ( <Image style={styles.images} source={ baseimage } /> )
            }
            <Text>Name :</Text>
            <Text style={styles.PokemonName}>{pokemonDatas.name}</Text>
            <Text>Capacity :</Text>
            <Text style={styles.PokemonCharacteristic}>{PokemonAbilities}</Text>
            {/* <Text style={styles.PokemonCharacteristic}>{PokemonGameIndex}</Text>
            <Text style={styles.PokemonCharacteristic}>{PokemonGameVersion}</Text>*/}
        </View>

    )
}

const styles = StyleSheet.create({
    BlockDetails: {
        alignItems: "center",
        justifyContent: "center",
    },
    images: {
        backgroundColor: "#fff",
        borderRadius: 50,
        width: 200,
        height: 200,
        marginTop: 30,
        marginBottom: 20,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.4,
        shadowRadius: 3,
    },
    PokemonName: {
        fontSize: 26,
        marginBottom: 30,
        textTransform: "capitalize"
    },
    PokemonCharacteristic: {
        fontSize: 20,
        textTransform: "capitalize"
    }
});