import React from 'react';
import { withTheme  } from 'react-native-paper';
import { StyleSheet, ScrollView, Text,Button, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import ChangeTheme from '../components/ButtonTheme/ChangeTheme';

const Home = (props) => {


const { colors } = props.theme;

    return (

        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.textHeading}>Home page ths is </Text>
                <Button title="Login" />
                <Button title="Register" />
                <StatusBar style= 'flex'/>
            </View>
            <View>
                <ChangeTheme  style ={colors} />
            </View>
        </ScrollView>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default withTheme(Home);