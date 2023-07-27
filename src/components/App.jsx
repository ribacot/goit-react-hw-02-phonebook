import React, { Component } from 'react'
import Container from './container/Container';
import FormPhone from './form/FormFone';




export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };



  render() {
    return <>
      <Container title="Phone book">
        <FormPhone/>
    </Container>
      <Container title="Contacts">
        
    </Container>
    </>
  }
}

