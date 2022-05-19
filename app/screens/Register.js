import React, { useState } from "react";
import styled from "styled-components/native";
import api from "../api";
import { withTheme } from "react-native-paper";
import TextInput from "../components/items/Inputs/Input";
import MyButton from '../components/items/ButtonTheme/ButtonsPrimary';
const HomeImage2 = require('../assets/background/home3.png');






const Register = ({ navigation }) => {

    const [username, setUsername] = React.useState('')
    const [ConfirmPassword, setConfirmPassword] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [country, setCountry] = React.useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setErrors] = useState('');
    const [sucsess, setSucsess] = useState('');

    const userAuthentication = async (data) => {

        try {

            const response = await api.post('auth/users/register', data)
            console.log('ddddd')
            console.log(response.data.message);
            // setTimeout(() => navigate('/user/profile'), 2000);
        } catch (error) {
            console.error('There was an error!', error.response.data.errors.address.message);
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

  
    const HandlePress = (path) => {
        navigation.navigate(path);
    }

    return (

        <>
            <MyWrapper>
                <ImqgeBg source={HomeImage2} />
                <WrapperColumn >
                    <Heading>
                        FOOD BACH MAT MOOTCH
                    </Heading>
                    <SubHeading >
                        AJI AHYA NGOLIK  3AMER HADCHI BE3DA
                    </SubHeading>
                </WrapperColumn>

                <Wrapper >
                    <TextInput
                        style={{ marginTop: 10, borderRadius: 10, borderColor: '#92e3a9' }}
                        name='username'
                        mode='outlined'
                        label='User Name'
                        value={username}
                        onChangeText={(username) => setUsername(username)}
                        selectionColor='#92e3a9'
                        underlineColor='#92e3a9'
                        activeUnderlineColor='#92e3a9'
                        outlineColor='#92e3a9'
                        activeOutlineColor='#123'

                    />
                    <TextInput
                        style={{ marginTop: 10, borderRadius: 10, borderColor: '#92e3a9' }}
                        name='Phone'
                        mode='outlined'
                        label='Phone'
                        value={phone}
                        onChangeText={(phone) => setPhone(phone)}
                        selectionColor='#92e3a9'
                        underlineColor='#92e3a9'
                        activeUnderlineColor='#92e3a9'
                        outlineColor='#92e3a9'
                        required={true}
                        activeOutlineColor='#123'
                    />
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
                        required={true}
                        activeOutlineColor='#123'

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
                        activeOutlineColor='#123'
                        required={true}
                    />
                    <TextInput
                        style={{ marginTop: 10, borderRadius: 10, borderColor: '#92e3a9' }}
                        name='ConfirmPassword'
                        mode='outlined'
                        label='Confirm Password'
                        value={ConfirmPassword}
                        onChangeText={(ConfirmPassword) => setConfirmPassword(ConfirmPassword)}
                        selectionColor='#92e3a9'
                        underlineColor='#92e3a9'
                        activeUnderlineColor='#92e3a9'
                        outlineColor='#92e3a9'
                        activeOutlineColor='#123'
                        required={true}
                    />
                    <Mt5></Mt5>
                    <MyButton title='Sign In' mode='contained' color='#92e3a9' onPress={() => HandlePress('Profile')} />
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
            font-size : 26px ;
            padding-bottom : 50px;
            font-weight : 800 ;     ;
            font-family : Arial ;
            color : green ;  
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
            margin-top : 180px ;
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

export default withTheme(Register);
