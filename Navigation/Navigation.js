import Home from "../Screens/Home";
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import PokemonDetail from "../Screens/PokemonDetail";
import {Image, View} from "react-native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function PokemonStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="PokemonDetail" component={PokemonDetail} />
        </Stack.Navigator>
    )
}

export default function Navigation(){


    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen options={{title: "Pokedex", headerTintColor: "white", headerStyle: {backgroundColor: "red"}, tabBarIcon: ({focused}) => (
                    <View>
                        <Image source={require('../assets/pokeball.png')}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                        }}

                        />
                    </View>
                    ) }}
                            name="Home"
                            component={PokemonStack}
                            />
                <Tab.Screen options={{headerTintColor: "white", headerStyle: {backgroundColor: "red"}, tabBarIcon: ({focused}) => (
                        <View>
                            <Image source={require('../assets/research.png')}
                                   resizeMode="contain"
                                   style={{
                                       width: 25,
                                       height: 25,
                                   }}

                            />
                        </View>
                    ) }} name="Research" component={PokemonStack} />
                <Tab.Screen options={{headerTintColor: "white", headerStyle: {backgroundColor: "red"}, tabBarIcon: ({focused}) => (
                        <View>
                            <Image source={require('../assets/teams.png')}
                                   resizeMode="contain"
                                   style={{
                                       width: 25,
                                       height: 25,
                                   }}

                            />
                        </View>
                    ) }} name="Teams" component={PokemonStack} />
                <Tab.Screen options={{headerTintColor: "white", headerStyle: {backgroundColor: "red"}, tabBarIcon: ({focused}) => (
                        <View>
                            <Image source={require('../assets/profile.webp')}
                                   resizeMode="contain"
                                   style={{
                                       width: 25,
                                       height: 25,
                                   }}

                            />
                        </View>
                    ) }} name="Profils" component={PokemonStack}  />
            </Tab.Navigator>
        </NavigationContainer>
    )
}