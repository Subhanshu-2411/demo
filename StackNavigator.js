import React from "react"
import { StyleSheet, Text, View } from "react-native"
import Home from "./screens/Home"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Countdown from "./screens/Countdown";

function StackNavigator() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
                <Stack.Screen name="Countdown" component={Countdown} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator