import  React from 'react';
 import { Button } from 'react-native-paper';


import { withTheme } from 'react-native-paper';
// Black background and white text in light theme, inverted on dark theme


const MyButton = (props) => {
   
    return (
        <Button onPress= {props.onPress}  style={props.style} mode = {props.mode} color = {props.color} dark = {props.dark} >
            {props.title}
        </Button>
    );
}

export default withTheme(MyButton);             