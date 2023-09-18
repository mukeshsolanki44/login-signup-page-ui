import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignUp from '../screens/SignUp';
import LogIn from "../screens/login";
import First from "../screens/first";
import Home from "../screens/home"

const Stack = createNativeStackNavigator();
const NavigationApp = () => {
    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName="First">
                <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false }}/>
                <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
                <Stack.Screen name="First" component={First} options={{ headerShown: false}}/>
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false}}/>


            </Stack.Navigator>
        </NavigationContainer>

    );
}

export default NavigationApp;