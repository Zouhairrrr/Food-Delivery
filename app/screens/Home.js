import React from 'react';
import { withTheme } from 'react-native-paper';
import { ScrollView, View, StyleSheet, Box } from 'react-native'

// immporting all comppoenet required for this component


import MyButton from '../components/ButtonTheme/ButtonsPrimary';
import Textheading from '../components/text/Text';
import Background from '../components/helpers/Background';


const HomeImage = require('../assets/background/home.png');

const Home = ({ navigation, theme }) => {

    const { colors, fontsSize, fonts } = theme;
    const style = StyleSheet.create({
        container: {
            width: '100%',
            height: '100%',
            backgroundColor: colors.background,
            alignItems: 'center',
            justifyContent: 'center',
        },
        // wrapper: {
        //     flex: 1,
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //     marginTop: 20,
        //     marginBottom: 20
        // },

        heading: {
            color: colors.accent,
            fontSize: fontsSize.large,
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 20,
            marginBottom: 20,
            fontFamily: fonts.bold,
        }
        ,
        imagebg: {
            flex: 1,
            width: '100%',
            height: '100%',
            marginTop: 20,
            marginBottom: 20
        }
    }
    )
    const HandlePress = (path) => {
        navigation.navigate(path);
    }
    return (
        <View style={style.container}>
            <ScrollView>
                <MyButton onPress={() => HandlePress('Login')} title="Login" mode="contained" color={colors.primary} dark={true} />

                {/*  */}
                <View style={style.wrapper}>
                    <Textheading title='Hello from home page' />
                    <Background
                        style={style.imagebg}
                        source={HomeImage}
                    >
                        <View style={style.wrapperImage} >
                            <Textheading title='Hello from home page' style={style.heading} />
                        </View>
                    </Background>
                </View>
            </ScrollView>
        </View>
    )
}



export default withTheme(Home);