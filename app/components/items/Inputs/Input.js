import * as React from 'react';
import { TextInput, withTheme } from 'react-native-paper';

const InputTexts = (props) => {
    const [text, setText] = React.useState("");

    return (
        <TextInput
            mode={props.mode}
            label={props.label}
            value={props.value}
            width={props.width}
            onChangeText={props.onChangeText}
            style={props.style}
            
        />
    );
};

export default withTheme(InputTexts);