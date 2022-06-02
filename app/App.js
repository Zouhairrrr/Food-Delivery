import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import Router from './components/helpers/Router';




const App = () => {




  return (
    <NavigationContainer>
      <PaperProvider >
        <Router />
      </PaperProvider>
    </NavigationContainer>
  );
}
export default App;