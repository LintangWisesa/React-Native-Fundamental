import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Komponen extends Component {
    render(){
        return(
            <View>
                <Text style={{fontSize: 25}}>
                    Halo ini komponen!
                </Text>
                <Text style={{fontSize: 25}}>
                    {this.props.isi}
                </Text>
            </View>
        )
    }
}

export default Komponen