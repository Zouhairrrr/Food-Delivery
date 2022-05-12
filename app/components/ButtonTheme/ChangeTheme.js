import React from 'react'
import { Button } from 'react-native-paper'; // Import the Button component from react-native-paper

const ChangeTheme = (props) => {
    
    
    return (
        
        <Button raised theme={{ color: 'danger' , fontSizes: 'small'}} >
            Change Themer
        </Button>
    )
}

export default ChangeTheme;