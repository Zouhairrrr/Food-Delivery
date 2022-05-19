import { View, Text } from 'react-native'
import React, { useState } from 'react'


import { Drawer, withTheme } from 'react-native-paper'

const Drawe = (propss) => {

    const [active, setActive] = useState('');

    return (

        <Drawer.Section >
            <Drawer.Item
                label="Home"
                active={active === 'home'}
                onPress={() => {
                    setActive('home');
                    propss.navigation.navigate('Home');
                }
                }
            />
            <Drawer.Item
                label="Profile"
                active={active === 'profile'}
                onPress={() => {
                    setActive('profile');
                    propss.navigation.navigate('Profile');
                }
                }
            />
        </Drawer.Section>
    )
}



export default withTheme(Drawe) 