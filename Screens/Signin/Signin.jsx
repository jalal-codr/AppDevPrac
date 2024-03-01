import React from 'react'
import {View,Text,Button} from 'react-native'


function Signin({navigation,route}) {
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
    const render = ()=>{
        if(user){
            return(<View>
        <Text>{user}</Text>
        <Text>{id}</Text>
            </View>)
        }
    }
  return (
    <View>
        {
            render()
        }
        <Text>SignIn Page</Text>
        <Button title='Signin' onPress={btnClick}/>
        <Button title='Back Home' onPress={goBack}/>
    </View>
  )
}

export default Signin
