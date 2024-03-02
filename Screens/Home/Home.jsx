import React from 'react'
import {View,Text,Button,Image, ScrollView, FlatList, SectionList} from 'react-native'


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
      keyExtractor={item => `basicListEntry-${item}`}
      />
    </View>
  </View>
  )
}

export default Home
