// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from './screens/Home';
// import Details from './screens/Details';
// import Settings from './screens/Settings';
// import About from './screens/About';
// import Login from './screens/Login';
// import Register from './screens/Register';
// import Forgot from './screens/Forgot';
// import Profile from './screens/Profile';
// import EditProfile from './screens/EditProfile';
// import ChangePassword from './screens/ChangePassword';




const App = () => {

    const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        {/* <Stack.Screen name='Details' component={Details} />
        <Stack.Screen name='Settings' component={Settings} />
        <Stack.Screen name='About' component={About} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Forgot' component={Forgot} />
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='EditProfile' component={EditProfile} />
        <Stack.Screen name='ChangePassword' component={ChangePassword} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
