import React, { Component } from 'react'
import { View, Button, Text } from 'react-native'

class App extends Component {
  state = {x: 'Andi'}
  render(){
    return(
      <View>
        <Text style={{fontSize: 30}}>
          Halo {this.state.x}
        </Text>
        <Button title='Klik sini'
        color='lightblue'
        onPress={()=>{this.setState({x: 'Budi'})}}/>
      </View>
    )
  }
}

export default App