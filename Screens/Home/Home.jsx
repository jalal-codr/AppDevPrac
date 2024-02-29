import React from 'react'
import {View,Text,Button} from 'react-native'


function Home({navigation}) {

  const btnPress  = ()=>{
    navigation.navigate('Signin');
  }
  return (
  <View>
    <Text>Hello</Text>
    <Button title='SignIn' onPress={btnPress}/>
  </View>
  )
}

export default Home
