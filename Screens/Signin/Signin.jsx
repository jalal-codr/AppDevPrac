import React, { useState } from 'react'
import {View,Text,Button,TextInput, Alert, ScrollView} from 'react-native'
import SignIn from '../../Components/SignIn';
import{auth} from '../../firebaseConfig'


function Signin({navigation,route}) {
    const [email,setEmail] = useState('');
    const [pswd,setPswd] = useState('');
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
        Alert.alert(email)
    }
  return (
    <View>
      <View>
        <TextInput 
        placeholder="Email"
        onChangeText={inEmail=>setEmail(inEmail)}
        defaultValue={""}/>
      </View>
      <View>
        <TextInput 
        placeholder="Password"
        onChangeText={inPswd=>setPswd(inPswd)}
        defaultValue={""}/>
      </View>
      <Button title='SignIn' onPress={submit}/>
      <Button title='SignInWithGoogle' onPress={submit}/>
    </View>
  )
}

export default Signin
