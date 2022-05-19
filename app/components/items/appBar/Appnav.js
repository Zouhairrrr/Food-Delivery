import * as React from 'react';
import { Appbar, withTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const AppNav = (props) => (



    <Appbar style={styles.bottom}>
        {props.children}
    </Appbar>
);

export default withTheme(AppNav)








const styles = StyleSheet.create({
    bottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
});