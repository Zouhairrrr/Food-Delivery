import React from "react";
import { StyleSheet, ScrollView,Button, Text, TextInput, View } from "react-native";

const Register = () => {

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [city, setCity] = React.useState('')
    const [state, setState] = React.useState('')
    const [zip, setZip] = React.useState('')
    const [country, setCountry] = React.useState('')
    const [
        usernameError,
        setUsernameError,
    ] = React.useState('');
    const [

        passwordError,
        setPasswordError,
    ] = React.useState('');
    const [
        emailError,
        setEmailError,
    ] = React.useState('');

    return (

        <ScrollView>

            <View style={styles.container}>
                <Text>Register page</Text>
                <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={(text) => setUsername(text)} />
                <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={(text) => setPassword(text)} />
                <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={(text) => setEmail(text)} />
                <TextInput style={styles.input} placeholder="Phone" value={phone} onChangeText={(text) => setPhone(text)} />
                <TextInput style={styles.input} placeholder="Address" value={address} onChangeText={(text) => setAddress(text)} />
                <TextInput style={styles.input} placeholder="City" value={city} onChangeText={(text) => setCity(text)} />
                <TextInput style={styles.input} placeholder="State" value={state} onChangeText={(text) => setState(text)} />
                <TextInput style={styles.input} placeholder="Zip" value={zip} onChangeText={(text) => setZip(text)} />
                <TextInput style={styles.input} placeholder="Country" value={country} onChangeText={(text) => setCountry(text)} />
                <Button title="Register" />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        margin: 10,
        width: 200,
    },
});


export default Register;
