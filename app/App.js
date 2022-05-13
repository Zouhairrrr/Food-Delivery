import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Router from './components/helpers/Router';



const App = () => {

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
  fonts : {
    regular : 'Roboto-Regular',
    medium : 'Roboto-Medium',
    light : 'Roboto-Light',
    thin : 'Roboto-Thin',
    bold : 'Roboto-Bold',
    italic : 'Roboto-Italic',
    boldItalic : 'Roboto-BoldItalic',
    black : 'Roboto-Black',
    blackItalic : 'Roboto-BlackItalic',
    mediumItalic : 'Roboto-MediumItalic',
  },
  fontsSize : {
    regular : 14,
    medium : 14,
    light : 14,
    thin : 14,
    bold : 14,
    italic : 14,
    boldItalic : 14,
    black : 14,
    blackItalic : 14,
    large : 62,
  }
  };




  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <Router />
      </PaperProvider>
    </NavigationContainer>
  );
}
export default App;