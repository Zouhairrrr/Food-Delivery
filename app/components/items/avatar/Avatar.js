import * as React from 'react';
import { Avatar, withTheme } from 'react-native-paper';

const ProfileImage = (props) => (
    <Avatar.Image
        size={props.size}
        source={props.source}
        style={props.style}
        onLoad={props.onLoad}
        onError={props.onError}
        onLoadStart={props.onLoadStart}
        onLoadEnd={props.onLoadEnd}
        theme={props.theme}


    />
);
export default withTheme(ProfileImage);