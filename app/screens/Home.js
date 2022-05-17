import React from 'react';
import { withTheme } from 'react-native-paper';
import { ScrollView, View, Box } from 'react-native'
import styled from 'styled-components/native';



import MyButton from '../components/items/ButtonTheme/ButtonsPrimary';
import IconButtons from '../components/items/ButtonTheme/IconButton';
const HomeImage = require('../assets/background/home.png');
const HomeImage2 = require('../assets/background/home2.png');

const Home = ({ navigation, theme }) => {

    const { colors, fontsSize, fonts } = theme;

    const HandlePress = (path) => {
        navigation.navigate(path);
    }

    return (
        <>
           <IconButtons
                        icon='home'
                        color='#92e3a9'
                        size={44}
                        style={{ position: 'absolute', top: 0, left: 0  , zIndex: 1 }}
                        onPress={() => console.log('fffffff')}
                    />
            <MyWrapper>
                <ImqgeBg source={HomeImage} />
                <WrapperColumn >

                    <Heading>
                        FOOD BACH MAT MOOTCH
                    </Heading>

                    <SubHeading>
                        The best food in the world
                    </SubHeading>

                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec euismod, nisl eget consectetur sagittis,
                    </Paragraph>
                    <Wrapper >
                        <MyButton title='Sign up' mode='contained' color='#92e3a9' compact={true} onPress={() => HandlePress('Register')} />
                        <MyButton title='Sign in' mode='contained' color='#92e3a9' compact={true} onPress={() => HandlePress('Login')} />
                    </Wrapper>
                </WrapperColumn>
                <Wrapper >
                    <ImqgeBg source={HomeImage2} />
                </Wrapper>


            </MyWrapper>
        </>

    )
}

const ImqgeBg = styled.ImageBackground`
    position: absolute;
    border-radius: 50%;
    top: 0%;
    right: 0%;
    width: 100%;
    height: 60%;   
    `;

const MyWrapper = styled.View`
    padding-left: 5px;
    padding-right: 5px;
    flex: 1;
    position : relative ;
    display : flex ;
    flex-direction : column ;
    background-color: rgba(146,227,169,0.2);
    align-items : center ;
    justify-content : center ;
`

const Mr5 = styled.View`
    margin-right : 25px ;
`
const Mt5 = styled.View`
margin-top : 10px ;
`
const Wrapper = styled.View`
    width : 100% ;
    display : flex ;
    flex-direction : row ;
    align-items : center ;
    justify-content : center ;
    `;
const Heading = styled.Text`
    font-size : 24px ;
    font-weight : 800 ;     ;
    font-family : Arial ;
    color : #123 ;  
    text-align : center ;
    `;
const SubHeading = styled.Text`
    font-size : 18px ;
    font-weight : 400 ;     ;
    font-family : Arial ;
    color : #123 ;  
    text-align : center ;
    `;
const WrapperColumn = styled.View`
        margin-top : 80px ;
        width : 100% ;
        display : flex ;
        flex-direction : column ;
        align-items : center ;
        justify-content : space-around ;
        height : 30% ;

    `;
const Paragraph = styled.Text`
    font-size : 16px ;
    font-weight : 400 ;
    font-family : Arial ;
    text-align : center ;
    color : rgba(0,0,0,0.5) ;
    `;

// const SwitcherButton = styled)`
//     position : absolute ;
//     top : 0 ;
//     right : 0 ;
//     width : 50px ;
//     height : 50px ;
//     background-color : rgba(0,0,0,0.5) ;
//     border-radius : 50px ;
//     display : flex ;
//     align-items : center ;
//     justify-content : center ;
//     `;


export default withTheme(Home);




