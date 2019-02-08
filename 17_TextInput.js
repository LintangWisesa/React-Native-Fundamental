import React, { Component } from 'react'
import { View, TextInput, Button, Text } from 'react-native'

class App extends Component {
  state = {nama: ''}
  render(){
    return(
      <View style={{padding: 25}}>
        <TextInput
          style={{height: 50, fontSize: 25}}
          placeholder='Ketik nama Anda...'
          keyboardType = 'default' // 'number-pad' 'numeric' 'phone-pad'
          onChangeText = {(e)=>{this.setState({nama: e})}}
        />
        <Button
          title='Klik sini'
          color='lightblue'
        />
        {this.state.nama ? 
        <Text style={{marginTop:10, fontSize:25}}>{this.state.nama}</Text> : 
        <View></View>}
      </View>
    )
  }
}

export default App