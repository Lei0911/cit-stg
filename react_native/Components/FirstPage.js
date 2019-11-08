import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    ImageBackground,
    TouchableHighlight
} from "react-native";
import { NavigationEvents } from "react-navigation";
// import { Ionicons } from "@expo/vector-icons";

export default class FirstPage extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.pageText}>This is the first page</Text>

                <ImageBackground
                    // source={require("../assets/fristPage.jpg")}
                    style={styles.backgroundImage}
                >
                    <Image
                        source={require("../assets/fristPage.jpg")}
                        style={styles.pic}
                    />
                    {/* <Ionicons
                        name="md-checkmark-circle"
                        size={32}
                        color="green"
                        onPress={() => {
                            this.props.navigation.navigate("SignIn");
                        }}
                    /> */}
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => {
                            this.props.navigation.navigate("SignIn");
                        }}
                    >
                        <Text style={styles.btnText}> Sign In </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => {
                            this.props.navigation.navigate("AccountType");
                        }}
                    >
                        <Text style={styles.btnText}> Sign Up </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => {
                            this.props.navigation.navigate("AthTest");
                        }}
                    >
                        <Text style={styles.btnText}>Athlete Data Test </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => {
                            this.props.navigation.navigate("ClubTest");
                        }}
                    >
                        <Text style={styles.btnText}>Club Data Test </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => {
                            this.props.navigation.navigate("ProfilePageTest");
                        }}
                    >
                        <Text style={styles.btnText}>Profile Page Test </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => {
                            this.props.navigation.navigate("AthlClubList");
                        }}
                    >
                        <Text style={styles.btnText}>Athlete Club List </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => {
                            this.props.navigation.navigate("Profile");
                        }}
                    >
                        <Text style={styles.btnText}>Profile </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => {
                            this.props.navigation.navigate("Card");
                        }}
                    >
                        <Text style={styles.btnText}>Cards </Text>
                    </TouchableHighlight>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: "100%",
        height: "100%",
        resizeMode: "contain",
        alignItems: "center"
    },

    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    pic: {
        flex: 1,
        position: "absolute",
        width: "100%",
        height: "100%",
        resizeMode: "stretch"
    },
    pageText: {
        backgroundColor: "#ffbf00",
        fontSize: 18,
        fontWeight: "bold",
        opacity: 1
    },
    btnText: {
        fontSize: 14,
        fontWeight: "bold",
        opacity: 1,
        color: "blue"
    },
    button: {
        opacity: 0.7,
        backgroundColor: "#DDDDDD",
        width: "38%",
        padding: 14,
        alignItems: "center",
        justifyContent: "center",
        top: "14%"
    }
});
