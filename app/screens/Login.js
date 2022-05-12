import React from "react";
// import { } from "react-native";
import { StyleSheet, Pressable, Button, Text, TextInput, View } from "react-native";




const Login = ({ navigation }) => {


    const Handlepress = () => {
        navigation.navigate("Register");
    };
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");



    return (
        <View style={styles.container}>
            <Text> Login page </Text>
            <TextInput
                style={styles.input}
                placeholder='Username'
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <TextInput
                style={styles.input}
                placeholder='Password'
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text style={styles.info}> Already have an account ? </Text>
                <Pressable onPress={Handlepress}>
                    <Text style={styles.infoText}> Register </Text>
                </Pressable>
            </View>
            <Button title='Login' />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        margin: 10,
        width: 200,
    },
    info: {
        margin: 10,
        color: "#ccc",
    },
    infoText: {
        color: "#0066ff",
        margin: 10,
    },


});

export default Login;
