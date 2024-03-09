import React, { useState } from 'react'
import {View,Text,Button,TextInput, Alert, ScrollView} from 'react-native'
import SignIn from '../../Components/SignIn';
import {auth,provider} from '../../firebaseConfig'
import {signInWithEmailAndPassword,signInWithPopup,createUserWithEmailAndPassword} from 'firebase/auth'


function Signin({navigation,route}) {
    const [email,setEmail] = useState('');
    const [pswd,setPswd] = useState('');
    const {user,id} =route.params;




    const goBack = ()=>{
        navigation.popToTop();
    }
    const btnClick = async()=>{
      try{
        const response = await createUserWithEmailAndPassword(auth,email,pswd)
        if(response){
          navigation.navigate("Home")
        }
      }
      catch(err){
        Alert.alert(err.message);
      }
      
    }

    const submit = async()=>{
        // Alert.alert(email)
        try{
          const  response = await signInWithPopup(auth,provider);
          if(response){
            navigation.navigate("Home")
          }
        }
        catch(err){
          Alert.alert(err.message)
        }


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
      <Button title='SignIn' onPress={btnClick}/>
      <Button title='SignInWithGoogle' onPress={submit}/>
    </View>
  )
}

export default Signin
