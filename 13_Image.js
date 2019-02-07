import React, { Component } from 'react'
import { View, Image } from 'react-native'

class App extends Component {
  render(){
    return(
      <View>
        <Image
          style={{width: 200, height: 200}} 
          source={{uri: 'https://vignette.wikia.nocookie.net/logopedia/images/0/07/Fc_barcelona.png'}}
        />
        <Image
          style={{width: 200, height: 200}}
          source={require('./image/1.png')}
        />
      </View>
    )
  }
}

export default App