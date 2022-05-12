import React from 'react';
import { AppRegistry } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import App from './App';


const CustomDefaultTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        customColor: '#BADA55',
    },
    fonts: {
        ...DefaultTheme.fonts,
        superLight: { ...DefaultTheme.fonts['light'] },
    },
    userDefinedThemeProperty: '',
    animation: {
        ...DefaultTheme.animation,
        customProperty: 1,
    },
};


export default function Index() {


    const [isReady, setIsReady] = React.useState(false);
    const [initialState, setInitialState] = React.useState(initialState);

    React.useEffect(() => {
        
        setInitialState(true);
    }, []);
    
    return (
        <PaperProvider theme={theme}>
            <App />
        </PaperProvider>
    )
}

AppRegistry.registerComponent(appName, () =>Index);