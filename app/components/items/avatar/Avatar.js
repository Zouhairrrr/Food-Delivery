

import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Avatar, withTheme } from "react-native-paper";

const AvatarExample = (props) => {
    return (
        <>
            <Avatar.Icon
                source = {props.source}
                size={props.size}
                icon= {props.icon}
                style={props.style}
                />
            {/* <Avatar.Image
                size={100}
                source={{
                    uri:
                        `https://media.geeksforgeeks.org/wp-content/uploads/20220305133853/gfglogo-300x300.png`,
                }}
            /> */}
            {/* <Avatar.Text size={100} label="RK" /> */}
        </>
    );
};
export default withTheme(AvatarExample);

