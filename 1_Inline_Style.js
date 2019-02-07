import React, { Component } from 'react'
import { View, Text } from 'react-native'

class App extends Component {
  render(){
    return(
      <View>
        <Text style={{
          color: 'white',
          backgroundColor: 'pink',
          fontSize: 35,
          fontWeight: 'bold',
          padding: 15,
          margin: 15,
          textAlign: 'center'
        }}>
          Tes Android App
        </Text>
      </View>
    )
  }
}

export default App