import React, { useState } from 'react'
import {View,Text,Button,TextInput, Alert, ScrollView} from 'react-native'
import SignIn from '../../Components/SignIn';


function Signin({navigation,route}) {
    const [text,setText] = useState('');
    const {user,id} =route.params;




    const goBack = ()=>{
        navigation.popToTop();
    }
    const btnClick = ()=>{
        navigation.push('Signin',{
            user:"Jalal",
            id:"1"
          })
    }
    const submit = ()=>{
        Alert.alert(text)
    }
  return (
    <View>
        <TextInput
        placeholder='Enter text'
        onChangeText={newText=>{setText(newText)}}
        />
        <Button title='Submit text' onPress={submit}/>
        <Text>SignIn Page</Text>
        <Button title='Signin' onPress={btnClick}/>
        <Button title='Back Home' onPress={goBack}/>
        <SignIn/>
    </View>
  )
}

export default Signin
