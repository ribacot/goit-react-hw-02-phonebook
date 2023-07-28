import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import Container from './container/Container';
import FormPhone from './form/FormFone';
import ContactsList from './contacts_list/ContactsList';

const INITIAL_STATE = { contacts: [], name: '' };

export class App extends Component {
  state = {
    ...INITIAL_STATE,
  };

  hendleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  hendleSubmit = e => {
    e.preventDefault();
    this.setState(precState => {
      return {
        name: '',
        contacts: [
          ...precState.contacts,
          {
            name: this.state.name,
            id: nanoid(),
          },
        ],
      };
    });
  };

  render() {
    return (
      <>
        <Container title="Phone book">
          <FormPhone
            onSubmit={this.hendleSubmit}
            onChange={this.hendleChange}
            name={this.state.name}
          />
        </Container>
        <Container title="Contacts"><ContactsList contacts={ this.state.contacts} /></Container>
      </>
    );
  }
}
