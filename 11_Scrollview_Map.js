import React, { Component } from 'react'
import { Text, ScrollView } from 'react-native'

class App extends Component {
  state = {
    data: [
      'Andi', 'Budi', 'Caca', 'Deni', 'Euis', 'Fafa',
      'Gilang', 'Hani', 'Ika', 'Januar', 'Koko', 'Lina',
      'Maman', 'Nani', 'Opik', 'Prili', 'Qonita', 'Rano',
      'Susi', 'Tuti', 'Upik', 'Vanya', 'Wawan', 'Xonya',
      'Yayan', 'Zaenudin'
    ]
  }
  render(){
    var output = this.state.data.map((val, i)=>{
      return(
        <Text style={{fontSize: 30}} key={i}>{val}</Text>
      )
    })
    return(
      <ScrollView>
        {output}
      </ScrollView>
    )
  }
}

export default App