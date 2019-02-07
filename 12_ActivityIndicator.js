import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'

class App extends Component {
  render(){
    return(
      <View>
        <ActivityIndicator size='small' color='blue'/>
        <ActivityIndicator size='large' color='red'/>
        <ActivityIndicator size='small' color='green'/>
        <ActivityIndicator size='large' color='yellow'/>
      </View>
    )
  }
}

export default App