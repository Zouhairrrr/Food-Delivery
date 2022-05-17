import * as React from 'react';
import { withTheme } from 'react-native-paper';
import { Text } from 'react-native';


const Textheading = (props) => {
    
    return (

        <Text style={props.style}>
            {props.title}
        </Text>
    )

}

export default withTheme(Textheading);