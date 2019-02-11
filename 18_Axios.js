import React, { Component } from 'react'
import axios from 'axios'
import {Container, Header, Left, Body, Right, Title, Icon,
  Content, Footer, Button, Item, Input, Text, List,
  ListItem} from 'native-base'
import { Alert } from 'react-native'

class App extends Component {
  state = {
    nama: '',
    players: []
  }
  getapi = ()=>{
    var url = `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=${this.state.nama}`
    axios.get(url).then((x)=>{
      if (x.data.player){
        this.setState({players: x.data.player})
      } else {
        Alert.alert('Data tidak tersedia')
      }
    }).catch((x)=>{
      Alert.alert('Data gagal diambil!')
    })
  }
  render(){

    var dataPlayers = this.state.players.map((val, i)=>{
      var nama = val.strPlayer
      return (
        <ListItem key={i}>
          <Body>
            <Text>{nama}</Text>
          </Body>
        </ListItem>
      )
    })

    return(
      <Container>
        <Header searchBar rounded style={{backgroundColor: 'green'}}>
          <Item>
            <Icon name='search'/>
            <Input placeholder='Cari nasgor terenak terdekat...'
            onChangeText={(e)=>{this.setState({nama: e})}}
            />
          </Item>
        </Header>
        <Content>
          <Button full iconLeft success
          onPress={this.getapi}
          >
            <Icon name='logo-facebook'/>
            <Text>Cari player</Text>
          </Button>
          <List>
            {dataPlayers}
          </List>
        </Content>
        <Footer></Footer>
      </Container>
    )
  }
}

export default App
