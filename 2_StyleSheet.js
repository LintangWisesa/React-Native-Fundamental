import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class App extends Component {
  render(){
    return(
      <View>
        <Text style={desain.judul}>
          Tes Android App
        </Text>
      </View>
    )
  }
}

var desain = StyleSheet.create({
  judul: {
    color: 'white',
    backgroundColor: 'pink',
    fontSize: 35,
    fontWeight: 'bold',
    padding: 15,
    margin: 15,
    textAlign: 'center'
  }
})

export default App