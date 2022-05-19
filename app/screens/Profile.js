import React from 'react';
import { withTheme, Avatar } from 'react-native-paper';
import { ScrollView, View, Box } from 'react-native'
import styled from 'styled-components/native';
import MyButton from '../components/items/ButtonTheme/ButtonsPrimary';
import IconButtons from '../components/items/ButtonTheme/IconButton';
import ProfileImage from '../components/items/avatar/Avatar';
import Drawe from '../components/items/drawer/Drawe';


const HomeImage = require('../assets/background/profile.png');




const Profile = ({ navigation, theme }) => {





  const { colors, fontsSize, fonts } = theme;

  const HandlePress = () => {

    Drawe.navigation.navigate('Home');


  }

  return (
    <>

      <IconButtons
        icon='home'
        color='#92e3a9'
        size={44}
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
        onPress={() => console.log('fffffff')}
      />
      <ScrollView>
        <MyWrapper>

          <Heading>
            FOOD BACH MAT MOOTCH
          </Heading>

          <SubHeading>
            The best food in the world
          </SubHeading>

          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec euismod, nisl eget consectetur sagittis,
          </Paragraph>
          <WrapperColumn >
            <Wrapper >
              <ProfileImage
                source={HomeImage}
                zise={50}
                onLoad={() => console.log('loaded')}
                onError={() => console.log('error')}
                onLoadStart={() => console.log('start')}
                onLoadEnd={() => console.log('end')}
              />
            </Wrapper>
            <Wrapper >
            </Wrapper>
          </WrapperColumn>

        </MyWrapper>
      </ScrollView>
    </>

  )
}

const ImqgeBg = styled.ImageBackground`
      position: absolute;
      border-radius: 50%;
      top: 0%;
      right: 0%;
      width: 100%;
      height: 60%;
      `;

const MyWrapper = styled.View`
height: 100%;
      padding-left: 5px;
      padding-right: 5px;
      flex: 1;
      position : relative ;
      display : flex ;
      flex-direction : column ;
      background-color: rgba(146,227,169,0.2);
      align-items : center ;
      justify-content : center ;
      `

const Mr5 = styled.View`
      margin-right : 25px ;
      `
const Mt5 = styled.View`
      margin-top : 10px ;
      `
const Wrapper = styled.View`
      width : 100% ;
      display : flex ;
      flex-direction : row ;
      align-items : center ;
      justify-content : center ;
      `;
const Heading = styled.Text`
      font-size : 24px ;
      font-weight : 800 ;     ;
      font-family : Arial ;
      color : #123 ;
      text-align : center ;
      `;
const SubHeading = styled.Text`
      font-size : 18px ;
      font-weight : 400 ;     ;
      font-family : Arial ;
      color : #123 ;
      text-align : center ;
      `;
const WrapperColumn = styled.View`
      margin-top : 80px ;
      width : 100% ;
      display : flex ;
      flex-direction : column ;
      align-items : center ;
      justify-content : space-around ;
      height : 30% ;

      `;
const Paragraph = styled.Text`
      font-size : 16px ;
      font-weight : 400 ;
      font-family : Arial ;
      text-align : center ;
      color : rgba(0,0,0,0.5) ;
      `;

// const SwitcherButton = styled)`
//     position : absolute ;
//     top : 0 ;
//     right : 0 ;
//     width : 50px ;
//     height : 50px ;
//     background-color : rgba(0,0,0,0.5) ;
//     border-radius : 50px ;
//     display : flex ;
//     align-items : center ;
//     justify-content : center ;
//     `;


export default withTheme(Profile);




