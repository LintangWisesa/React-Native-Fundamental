import React, { Component } from 'react'
import axios from 'axios'
import {Container, Header, Left, Body, Right, Title, Icon,
  Content, Footer, Button, Item, Input, Text, List,
  ListItem, Thumbnail} from 'native-base'
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
      var posisi = val.strPosition
      var foto = val.strThumb
      return (
        <ListItem key={i} avatar>
          <Left>
            <Thumbnail
            source = {{uri: foto}}
            />
          </Left>
          <Body>
            <Text>{nama}</Text>
            <Text note>{posisi}</Text>
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
        <Button full iconLeft success
        onPress={this.getapi}
        >
          <Icon name='logo-facebook'/>
          <Text>Cari player</Text>
        </Button>
        <Content>
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
