import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Komponen from './komponen/8_Props'

class App extends Component {
  state = {
    data: 'Ini dari App.js'
  }
  render(){
    return(
      <View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center'
        }}>
          <View style={[desain.box, desain.box1]}></View>
          <View style={[desain.box, desain.box2]}></View>
          <View style={[desain.box, desain.box3]}></View>
          <View style={[desain.box, desain.box4]}></View>
        </View>
        <Komponen isi={this.state.data}/>
      </View>
    )
  }
}

var desain = StyleSheet.create({
  box: {width: 100, height: 100, borderRadius: 25},
  box1: {flex: 1, backgroundColor:'red'},
  box2: {flex: 1, backgroundColor:'yellow'},
  box3: {flex: 1, backgroundColor:'green'},
  box4: {flex: 1, backgroundColor:'blue'}
})

export default App