import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class App extends Component {
  render(){
    return(
      <View style={{
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <View style={[desain.box, desain.box1]}></View>
        <View style={[desain.box, desain.box2]}></View>
        <View style={[desain.box, desain.box3]}></View>
      </View>
    )
  }
}

var desain = StyleSheet.create({
  box: {width: 100, height: 100},
  box1: {backgroundColor:'red'},
  box2: {backgroundColor:'yellow'},
  box3: {backgroundColor:'green'}
})

export default App