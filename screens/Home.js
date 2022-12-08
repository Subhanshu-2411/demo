import React from 'react';
import {StyleSheet, Text, Pressable, View, Image} from "react-native"
import SafeAreaView from "react-native-safe-area-view";
import {
    Entypo,
    Ionicons,
    MaterialIcons,
    EvilIcons,
    FontAwesome5,
    FontAwesome,
    Octicons,
    MaterialCommunityIcons
} from '@expo/vector-icons';
import map from "../assets/map.jpg"
import {useNavigation} from "@react-navigation/native";

const Home = () => {

    const navigation = useNavigation()

    return (
        <SafeAreaView
            style={{
                marginTop: 50,
                margin: 30,
            }}
        >
            <Pressable
                // TODO: ADD BACK FUNCTIONALITY
                // onPress={}
                style={{
                    alignContent: "center",
                }}
            >
                <Ionicons
                    name="arrow-back-outline"
                    size={24}
                    color="black"
                    style={{

                    }}
                />
            </Pressable>
            <Text
                style={{
                    fontSize: 18,
                    color: "#BC2F61",
                    textAlign: "left",
                    fontWeight: "700",
                    font: "Space Grostek"
                }}
            >
                OUTDOOR RUNNING
            </Text>
            <View
                style={{
                    flexDirection: "row",
                    marginVertical: 10,
                }}
            >
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: "700",
                        font: "Space Grotesk",
                    }}
                >
                    You and the beats
                </Text>
                <MaterialIcons
                    style={{
                        margin: 5,
                    }}
                    name="run-circle"
                    size={28}
                    color="black"
                />
                <Text
                    style={{
                        margin: 4,
                        fontSize: 20,
                        fontWeight: "500",
                        font: "Space Grotesk",
                    }}
                >
                    3-
                </Text>
                <MaterialIcons
                    style={{
                        margin: 5,
                    }}
                    name="run-circle"
                    size={28}
                    color="black"
                />
                <Text
                    style={{
                        margin: 4,
                        fontSize: 20,
                        fontWeight: "500",
                        font: "Space Grotesk",
                    }}
                >
                    8
                </Text>
            </View>
            <View
                style={{
                    flexDirection: "row",
                }}
            >
                <EvilIcons
                    name="clock"
                    size={24}
                    color="black"
                />
                <Text
                    style={{
                        marginLeft: 5,
                        fontSize: 12,
                    }}
                >
                    30 mins
                </Text>
                <Entypo
                    name="dot-single"
                    size={20}
                    color="black"
                />
                {/*TODO:CHANGE WITH THE GIVEN ONE*/}
                <Entypo
                    name="circle"
                    size={16}
                    color="yellow"
                />
                <Text
                    style={{
                        marginLeft: 5,
                        fontSize: 12,
                    }}
                >
                    Intermediate
                </Text>
                <Entypo
                    name="dot-single"
                    size={20}
                    color="black"
                />
                <Text
                    style={{
                        marginLeft: 5,
                        fontSize: 12,
                    }}
                >
                    Intervals
                </Text>
            </View>
            <View
                style={{
                    marginHorizontal: 10,
                    padding: 20,
                    paddingHorizontal: 40,
                    borderColor: "black",
                    borderWidth: 2,
                    borderRadius: 40,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginVertical: 30,
                    align: "center",
                }}
            >
                <FontAwesome5
                    name="bookmark"
                    size={24}
                    color="black"
                />
                <Entypo
                    name="share"
                    size={24}
                    color="black"
                />
                <FontAwesome
                    name="cloud-download"
                    size={24}
                    color="black"
                />
            </View>
            <Text
                style={{
                    fontSize: 16,
                    font: "Space Grotesk",
                    marginVertical: 10,
                }}
            >
                Description
            </Text>
            <Text
                style={{
                    fontSize: 14,
                    align: "left",
                    marginVertical: 10,
                }}
            >
                Rotate between Intervals of walking, jogging and running to practice changing pace and getting comfortable at faster paces. Rock out to a full playlist as you work to beat your best effort paces.
            </Text>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    marginVertical: 20,
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Octicons
                        name="flame"
                        size={24}
                        color="black"
                    />
                    <Text
                        style={{
                            marginHorizontal: 5,
                        }}
                    >
                        360 Calories
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <MaterialCommunityIcons
                        name="map-marker-distance"
                        size={24}
                        color="black"
                    />
                    <Text
                        style={{
                            marginHorizontal: 5,
                        }}
                    >
                        12 km
                    </Text>
                </View>
            </View>
            <View
                style={{
                    flexDirection: "column",
                    marginTop: 20,
                    marginHorizontal: 20,
                    borderRadius: 20,
                    alignItems: "center",
                }}
            >
                <Image
                    source={map}
                    style={{
                        height: 200,
                        width: 300,
                        borderRadius: 25,
                        marginBottom: 20,
                    }}
                />
                <Pressable
                    onPress={() => navigation.navigate("Countdown")}
                    style={{
                        padding: 10,
                        borderRadius: 20,
                        width: "90%",
                        backgroundColor: "black",
                    }}
                >
                    {/*<Entypo name="lock" size={24} color="white" />*/}

                    <Text
                        style={{
                            color: "white",
                            fontSize: 16,
                            width: "100%",
                            paddingLeft: 70,
                        }}
                    >
                        Start Workout
                    </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({})