import React, { Component } from 'react'
import { View, Text } from 'react-native'

class App extends Component {
  constructor(){
    super()
    this.state = {
      z: 'Halo ini z'
    }
  }
  x = 'Halo Ini X!'
  a = (b)=>{
    return `Halo ini ${b}`
  }
  render(){
    var y = 'Halo ini y!'
    var c = (d)=>{
      return `Halo ini ${d}`
    }
    return(
      <View>
        <Text>Tes Android App</Text>
        <Text>{this.x}</Text>
        <Text>{y}</Text>
        <Text>{this.state.z}</Text>
        <Text>{this.a('A')}</Text>
        <Text>{c('C')}</Text>
      </View>
    )
  }
}

export default App