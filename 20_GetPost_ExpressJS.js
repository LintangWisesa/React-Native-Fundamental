import React, { Component } from 'react'
import axios from 'axios'
import {Container, Content, List, ListItem, Text, 
  Button, Left, Body, Form, Item, Input, 
  Grid, Col, Label} from 'native-base'
import {Alert} from 'react-native'

class App extends Component {

  constructor(){
    super()
    this.state = {
      data: [], nama: '', usia: '', email: ''
    }
  }
  kirimdata = ()=>{
    var url = 'http://172.16.1.12:1234/data'
    axios.post(url, {
      nama: this.state.nama,
      usia: this.state.usia,
      email: this.state.email
    }).then((x)=>{
      Alert.alert('Data sukses terkirim! 😍')
      this.ambildata()
    }).catch((x)=>{
      Alert.alert('Data gagal terkirim! 😱')
    })
  }
  ambildata = ()=>{
    var url = 'http://172.16.1.12:1234/data'
    axios.get(url).then((x)=>{
      console.log(x.data)
      this.setState({
        data: x.data
      })
    }).catch((x)=>{
      console.log(x)
    })
  }
  render(){
    var dataOut = this.state.data.map((val, i)=>{
      return(
        <ListItem key={i} avatar>
          <Left>
            <Text>{val.id}</Text>
          </Left>
          <Body>
            <Text>{val.nama} ({val.usia} th)</Text>
            <Text note>{val.email}</Text>
          </Body>
        </ListItem>
      )
    })
    return(
      <Container>
        <Content>
        <Form>
          <Item floatingLabel>
            <Label>Nama</Label>
            <Input 
            onChangeText={(e)=>{
              this.setState({
                  nama: e
              })
            }}/>
          </Item>
          <Item floatingLabel>
            <Label>Usia</Label>
            <Input
            onChangeText={(e)=>{
              this.setState({
                  usia: e
              })
            }}/>
          </Item>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
            onChangeText={(e)=>{
              this.setState({
                  email: e
              })
            }}/>
          </Item>
        </Form>
        <Grid>
          <Col>
            <Button full warning onPress={this.kirimdata}>
              <Text>Kirim Data</Text>
            </Button>
          </Col>
          <Col>
            <Button full success onPress={this.ambildata}>
              <Text>Ambil Data</Text>
            </Button>
          </Col>
        </Grid>
          <List>{dataOut}</List>
        </Content>
      </Container>
    )
  }
}

export default App