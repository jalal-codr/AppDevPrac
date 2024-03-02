import React from 'react'
import {View,Text,Button,Image, ScrollView} from 'react-native'


function Home({navigation}) {

  const btnPress  = ()=>{
    navigation.navigate('Signin',{
      user:"Jalal",
      id:"1"
    });
  }
  return (
  <View>
    <Text>Hello</Text>
    <Button title='SignIn' onPress={btnPress}/>
    <ScrollView>
    <Text>Hello</Text>
    <Text>Hello</Text>
    <Text>Hello</Text>
    <Text>Hello</Text>
    <Text>Hello</Text>
    <Text>Hello</Text>
    <Text>Hello</Text>
    <Text>Hello</Text>
    </ScrollView>
  </View>
  )
}

export default Home
