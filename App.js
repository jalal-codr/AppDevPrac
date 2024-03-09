import * as React from 'react';
import { StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from './Screens/Home/Home';
import Signin from './Screens/Signin/Signin';
import {onAuthStateChanged} from'firebase/auth'
import {auth} from './firebaseConfig'



const Stack = createNativeStackNavigator();

export default function App() {
  const [user,setUser] = React.useState() 

  React.useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      console.log(user)
    })
  },[])
 

  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} initialParams={{
      user:"Jalal",
      id:"1"
    }}/>
        <Stack.Screen name='Signin' component={Signin}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn:{
    width:100,
    marginTop:150,
  },
  btnView:{
    backgroundColor:"#0000FF",
    width:200,
    height:40,
    borderRadius:100/3,
  }
});
