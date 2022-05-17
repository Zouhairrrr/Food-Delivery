import * as React from 'react';
import { IconButton, withTheme } from 'react-native-paper';

const IconButtons = (props) => (
    <IconButton
        icon={props.icon}
        color={props.color}
        size={props.size}
        style = {props.style}
        onPress={props.onPress}
    />
);

export default withTheme(IconButtons);