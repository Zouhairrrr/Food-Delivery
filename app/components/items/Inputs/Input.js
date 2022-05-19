import * as React from 'react';
import { TextInput, withTheme } from 'react-native-paper';

const InputTexts = (props) => {
    const [text, setText] = React.useState("");

    return (
        <TextInput
            mode={props.mode}
            label={props.label}
            value={props.value}
            onChangeText={props.onChangeText}
            style={props.style}
            selectionColor = {props.selectionColor}
            underlineColor = {props.underlineColor}
            activeUnderlineColor = {props.activeUnderlineColor}
            outlineColor = {props.outlineColor}
            error = {props.error}
            activeOutlineColor = {props.activeOutlineColor}

            
        />
    );
};

export default withTheme(InputTexts);