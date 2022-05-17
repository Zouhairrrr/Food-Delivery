import React from "react";
import styled from "styled-components/native";
import api from "../api";

import TextInput from "../components/items/Inputs/Input";
import MyButton from '../components/items/ButtonTheme/ButtonsPrimary';
const HomeImage2 = require('../assets/background/home2.png');



const Login = ({ navigation }) => {


    const userAuthentication = async (username, password) => {
        const response = await api.post('/auth/users/login', { username, password });
        if (response.status === 200) {
            navigation.navigate('Home');
        }
    }


    const Handlepress = () => {
        navigation.navigate("Register");
    };
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");



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
                        mode='outlined'
                        label='Username'
                        value={username}
                        width='100%'
                        
                        onChangeText={(username) => setUsername(username)}
                        
                    />
                    <TextInput
                        mode='outlined'
                        label='Password'
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                        
                    />
                        <MyButton title='Sign In' mode='contained' color='#92e3a9' compact={true} onPress={() => console.log('fffff')} />
                    </Wrapper>


            </MyWrapper>
        </>


        // <MyWrapper>
        //     <Heading>
        //        SIGN IN 
        //     </Heading>
        //     <SubHeading>
        //         MATKHAFCH MAGHADICH IJIK JOU3 
        //     </SubHeading>
        //     <Paragraph>
        //         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        //         Donec euismod, nisl eget consectetur sagittis,
        //     </Paragraph>
        //     <Wrapper>
        //         <TextInput
        //             label="Username"
        //             value={username}
        //             onChangeText={text => setUsername(text)}
        //             style={{ marginBottom: 10 }}
        //         />
        //         <TextInput
        //             label="Password"
        //             value={password}
        //             onChangeText={text => setPassword(text)}
        //             style={{ marginBottom: 10 }}
            //         />
            //         <MyButton title="Sign in" mode="outlained" color="#92e3a9" compact={true} onPress={() => userAuthentication(username, password)} />
            //     </Wrapper>
            // </MyWrapper>

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
        padding-left: 5px;
        padding-right: 5px;
        flex: 1;
        position : relative ;
        display : flex ;
        flex-direction : column ;
        background-color: rgba(146,227,169,0.2);
    
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

export default Login;
