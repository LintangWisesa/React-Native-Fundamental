import React, { Component } from 'react'
import { View, WebView } from 'react-native'

class App extends Component {
  render(){
    return(
      <View>
        <WebView
          source={{uri: 'https://www.tokopedia.com/'}}
        />
      </View>
    )
  }
}

export default App