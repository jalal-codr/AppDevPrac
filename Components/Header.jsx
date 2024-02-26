import React from 'react'
import {SafeAreaView,Text,StyleSheet,Button,View,Alert} from "react-native"

function Header({data}) {
    const btnClick = ()=>{
        Alert.alert("Btn clicked")
      }
  return (
    <View style={styles.btnView}>
      <Button  title={"Press"} onPress={btnClick}  style={styles.btn} />
      </View>
  )
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

export default Header
