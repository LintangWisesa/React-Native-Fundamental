import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

class App extends Component {
  state = {x: 'Andi'}
  render(){
    return(
      <View>
        <Text style={{fontSize: 30}}>
          Halo {this.state.x}
        </Text>
        <View style={{
          flex: 1, justifyContent: 'center', paddingHorizontal: 40
        }}>
          <TouchableOpacity
          style={{
            alignItems: 'center', 
            backgroundColor: 'pink',
            padding: 15
          }}
          onPress={()=>{this.setState({x: 'Budi'})}}>
            <Text>Klik sini</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default App