import React from 'react';
import { Button } from 'react-native-paper';
import styled  from 'styled-components/native';
import { withTheme } from 'react-native-paper';
// Black background and white text in light theme, inverted on dark theme



const MyButton = (props) => {
    return (

        <Button onPress={props.onPress} style={props.style} name = {props.name} compact = {props.compact} contentStyle={props.contentStyle} mode={props.mode} color={props.color} dark={props.dark} >
            {props.title}
        </Button>
    );
}



const DefaultButton = styled(MyButton)`
    font-size: 20px;
    font-weight: bold;
    padding: 5px 15px;
    margin: 10px;
    border-radius: 5px;
    border-width: 1px;
    border-color: #92e3a9;
`;





export default withTheme(DefaultButton);             