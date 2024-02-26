import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,Alert } from 'react-native';
import Header from './Components/Header';

export default function App() {




  return (
    <View style={styles.container}>
      <Header/>
    </View>
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
