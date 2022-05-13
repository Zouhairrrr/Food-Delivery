import { Image, Box } from 'react-native'
import React from 'react'
import { withTheme } from 'react-native-paper';



const BackgroundImage = (props) => {
    return (
        <>
          

                <Image
                    style={props.style}
                    source={props.source}
                    >
                </Image>
           
        </>
    )
}
export default withTheme(BackgroundImage);