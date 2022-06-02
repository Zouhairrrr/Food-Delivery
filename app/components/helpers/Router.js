
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// import Details from './screens/Details';
// import Settings from './screens/Settings';
// import About from './screens/About';
import Home from '../../screens/Home';
import Login from '../../screens/Login';
import Register from '../../screens/Register';
import ActivateAccount from '../../screens/ActivateAccount';
import Profile from '../../screens/Profile';
// import EditProfile from './screens/EditProfile';
// import ChangePassword from './screens/ChangePassword';


const Router = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='Profile' component={Profile} />
            <Stack.Screen name='ActivateAccount' component={ActivateAccount} />
            {/*
                <Stack.Screen name='Settings' component={Settings} />
                <Stack.Screen name='About' component={About} />
                <Stack.Screen name='Forgot' component={Forgot} />
                <Stack.Screen name='EditProfile' component={EditProfile} />
                <Stack.Screen name='ChangePassword' component={ChangePassword} /> 
            */}
        </Stack.Navigator>

    )
}


export default Router;