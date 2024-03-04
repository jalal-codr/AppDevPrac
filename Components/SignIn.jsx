import React from 'react';
import {View,Button, Alert} from "react-native";

function SignIn() {
  const  SignInWithGoogle=()=>{
    Alert.alert("Hello")
  }
  return (
    <View>
      <Button title='SignInWithGoogle' onPress={SignInWithGoogle}/>
    </View>
  )
}

export default SignIn
