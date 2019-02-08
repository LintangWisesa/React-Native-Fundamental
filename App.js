import React, { Component } from 'react'
import {Container, Header, Left, Body, Right, Title, Icon,
  Content, Footer, Button, Item, Input, Text} from 'native-base'

class App extends Component {
  state = {nama: ''}
  render(){
    return(
      <Container>
        <Header searchBar rounded style={{backgroundColor: 'green'}}>
          <Item>
            <Icon name='search'/>
            <Input placeholder='Cari nasgor terenak terdekat...'/>
          </Item>
        </Header>
        <Content>
          <Button iconLeft success>
            <Icon name='logo-facebook'/>
            <Text>Klik sini</Text>
          </Button>
        </Content>
        <Footer></Footer>
      </Container>
    )
  }
}

export default App
