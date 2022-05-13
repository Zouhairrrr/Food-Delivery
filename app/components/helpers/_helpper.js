import { DefaultTheme } from 'react-native-paper';


const theme = {
    ...DefaultTheme,
    roundness: 3,
    colors: {
        ...DefaultTheme.colors,
        primary: '#0F084B',
        accent: '0d0221',
        text: '#fff',
        background: '#f1c40f',
        surface: '#f1c40f',
        error: '#f1c40f',
        onPrimary: '#f1c40f',
        onAccent: '#f1c40f',
        onSurface: '#f1c40f',
        onError: '#f1c40f',
        disabled: '#f1c40f',
        placeholder: '#f1c40f',
        notification: '#f1c40f',
        backdrop: '#f1c40f',
        backdropSecondary: '#f1c40f',
        statusBar: '#f1c40f',
        header: '#f1c40f',
        headerTitle: '#f1c40f',

    },
}

const fontConfig = {
    web: {
        regular: {
            fontFamily: 'sans-serif',
            fontWeight: 'normal',
        },
        medium: {
            fontFamily: 'sans-serif-medium',
            fontWeight: 'normal',
        },
        light: {
            fontFamily: 'sans-serif-light',
            fontWeight: 'normal',
        },
        thin: {
            fontFamily: 'sans-serif-thin',
            fontWeight: 'normal',
        },
    },
    ios: {
        regular: {
            fontFamily: 'sans-serif',
            fontWeight: 'normal',
        },
        medium: {
            fontFamily: 'sans-serif-medium',
            fontWeight: 'normal',
        },
        light: {
            fontFamily: 'sans-serif-light',
            fontWeight: 'normal',
        },
        thin: {
            fontFamily: 'sans-serif-thin',
            fontWeight: 'normal',
        },
    },
    android: {
        regular: {
            fontFamily: 'sans-serif',
            fontWeight: 'normal',
        },
        medium: {
            fontFamily: 'sans-serif-medium',
            fontWeight: 'normal',
        },
        light: {
            fontFamily: 'sans-serif-light',
            fontWeight: 'normal',
        },
        thin: {
            fontFamily: 'sans-serif-thin',
            fontWeight: 'normal',
        },
    }
};
module.exports = { fontConfig, theme };
