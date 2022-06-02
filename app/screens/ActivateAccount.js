import React, { useState } from "react";
import styled from "styled-components/native";

import TextInput from "../components/items/Inputs/Input";
import MyButton from '../components/items/ButtonTheme/ButtonsPrimary';
const HomeImage2 = require('../assets/background/home2.png');

import api from "../api";


const ActivateAccount = ({ navigation }) => {

    const [errors, setErrors] = useState('');
    const [sucsess, setSucsess] = useState('');
    const [code, setCode] = useState('')



    const verrifyCodeforActivateAccount = (data) => {

        try {
            const response = api.get(`auth/users/activate-account`)
            setSucsess(response.data.message);
            console.log(response)


        } catch (error) {
            console.error('There was an error!', error.response.data.message);
            setErrors(error.response.data.message)
        }
    }


    const HandleSubmit = () => {
        const data = code
        verrifyCodeforActivateAccount(data)
    }

    return (

        <>
            <Model>
                {sucsess ? <Paragraph>{sucsess}</Paragraph> : null}
                {errors ? <Paragraph>{errors}</Paragraph> : null}
                <TextInput
                    style={{ marginTop: 10, borderRadius: 10, borderColor: '#92e3a9' }}
                    name='code'
                    mode='outlined'
                    label='code'
                    value={code}
                    onChangeText={(code) => setCode(code)}
                    selectionColor='#92e3a9'
                    underlineColor='#92e3a9'
                    activeUnderlineColor='#92e3a9'
                    outlineColor='#92e3a9'
                    activeOutlineColor='#92e3a9'
                />
                <MyButton title='Confirm Code' mode='contained' color='#92e3a9' onPress={HandleSubmit} />
            </Model>

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

const Model = styled.View`
        width : 90%;
        position : absolute;
        display : flex;
        flex-direction : column ;
        align-items : center ;
        justify-content : center ;
    `;
export default ActivateAccount;