import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import {useNavigation} from "@react-navigation/native";

const Countdown = () => {

    const navigation = useNavigation();

    let timer = 0;
    const [timeLeft, setTimeLeft] = useState(3);

    const startTime = () => {
        setTimeout(() => {
            if(timeLeft <= 0) {
                // TODO: CHANGE THE NEXT PLACE AFTER COUNT DOWN
                navigation.navigate("Home")
                clearTimeout(timer)
            }
            setTimeLeft(timeLeft - 1)
        }, 1000)
    }
    useEffect(() => {
        startTime();
        return () => clearTimeout(timer);
    })

    return (
        <View
            style={{
                marginTop: 50,
                backgroundColor: "black",
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    height: 50
                }}
            >

            </View>
            <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    paddingBottom: 100,
                }}
            >


                <Text
                    style={{
                        fontSize: 128,
                        color: "white",
                    }}
                >
                    {timeLeft === 0 ? "Let's Go!" : timeLeft}
                </Text>
            </View>
        </View>
    );
};

export default Countdown;

const styles = StyleSheet.create({})