import React, { useEffect, useState } from 'react'
import {auth} from "../../firebaseConfig"
import {onAuthStateChanged} from 'firebase/auth'
import {View,Text,Button,Image, ScrollView, FlatList, SectionList} from 'react-native'


function Home({navigation}) {
  const[user, setUser] = useState()

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      setUser(user)
    })
  })

  const btnPress  = ()=>{
    navigation.navigate('Signin',{
      user:"Jalal",
      id:"1"
    });
  }
  const getUserName = ()=>{
    if(user){
      return(<Text>Hello {user.displayName}</Text>)
    }
    else{
      return(<Text>Hello </Text>)
    }
  }
  return (
  <View>
    {
      getUserName()
    }
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
    <View>
      <FlatList
      data={[
        {key: 'Devin'},
        {key: 'Dan'},
        {key: 'Dominic'},
        {key: 'Jackson'},
        {key: 'James'},
        {key: 'Joel'},
        {key: 'John'},
        {key: 'Jillian'},
        {key: 'Jimmy'},
        {key: 'Julie'},
      ]}
      renderItem={({item})=>(<Text>{item.key}</Text>)}
      />
    </View>
    <View>
      <SectionList
      sections={[{title: 'D', data: ['Devin', 'Dan', 'Dominic']},{
        title: 'J',
        data: [
          'Jackson',
          'James',
          'Jillian',
          'Jimmy',
          'Joel',
          'John',
          'Julie',
        ],
      }]}
      renderItem={({item})=><Text>{item}</Text>}
      renderSectionHeader={({section})=>(<Text>{section.title}</Text>)}
      
      />
    </View>
  </View>
  )
}

export default Home
