import React, { useState } from "react";
import styled from "styled-components/native";
import api from "../api";
import { withTheme } from "react-native-paper";
import TextInput from "../components/items/Inputs/Input";
import MyButton from '../components/items/ButtonTheme/ButtonsPrimary';
const HomeImage2 = require('../assets/background/home2.png');





const Login = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setErrors] = useState('');
    const [sucsess, setSucsess] = useState('');

    const userAuthentication = async (data) => {

        try {
            
            const response = await api.post('auth/users/login', data)
            console.log('ddddd')
            console.log(response.data.message);
            // setTimeout(() => navigate('/user/profile'), 2000);
        } catch (error) {
            console.error('There was an error!', error.response.data.message);
            // setErrors(error.message)
            setPassword("");
        }

    }

    const HandleSubmit = () => {
        const data = {
            email,
            password,
        }
     userAuthentication(data)
    }

    const Handlepress = () => {
        navigation.navigate("Register");
    };

    return (
        <>
            <MyWrapper>
                <ImqgeBg source={HomeImage2} />
                <WrapperColumn >
                    <Heading>
                        FOOD BACH MAT MOOTCH
                    </Heading>
                </WrapperColumn>

                <Wrapper >
                    <TextInput
                        style={{ marginTop: 10, borderRadius: 10, borderColor: '#92e3a9' }}
                        name='email'
                        mode='outlined'
                        label='Email'
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                        selectionColor='#92e3a9'
                        underlineColor='#92e3a9'
                        activeUnderlineColor='#92e3a9'
                        outlineColor='#92e3a9'
                        activeOutlineColor='#92e3a9'
                    />
                    <TextInput
                        style={{ marginTop: 10, borderRadius: 10, color: '#92e3a9', border: 'none' }}
                        name='password'
                        mode='outlined'
                        label='Password'
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                        selectionColor='#123'
                        underlineColor='#92e3a9'
                        activeUnderlineColor='#92e3a9'
                        outlineColor='#92e3a9'
                        activeOutlineColor='#92e3a9'

                    />
                    <Mt5></Mt5>
                    <MyButton title='Sign In' mode='contained' color='#92e3a9' onPress={HandleSubmit} />
                </Wrapper>


            </MyWrapper>
        </>
    );
};


const ImqgeBg = styled.ImageBackground`
        position: absolute;
        border-radius: 50%;
        top: 0%;
        right: 0%;
        width: 100%;
        height: 60%;   
        `;

const MyWrapper = styled.View`
        padding-left : 10%;
        padding-right : 10%;
        flex: 1;
        position : relative ;
        display : flex ;
        flex-direction : column ;
        align-items : center ;
        justify-content : center ;
        background-color: rgba(146,227,169,0.2);
    `;

const Mr5 = styled.View`
        margin-right : 25px ;
    `;
const Mt5 = styled.View`
    margin-top : 10px ;
    `;
const Wrapper = styled.View`
        width : 100% ;
        display : flex ;
        flex-direction : column ;
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
        display : flex ;
        width : 100% ;
        flex-direction : column ;
        align-items : center ;
        justify-content : center ;
     

    `;
const Paragraph = styled.Text`
    font-size : 16px ;
    font-weight : 400 ;
    font-family : Arial ;
    text-align : center ;
    color : rgba(0,0,0,0.5) ;
    `;

export default withTheme(Login);
