import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import Container from './container/Container';
import FormPhone from './form/FormFone';
import ContactsList from './contacts_list/ContactsList';

const INITIAL_STATE = { contacts: [], name: '', number: '' };

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
        number:'',
        contacts: [
          ...precState.contacts,
          {
            name: this.state.name,
            number:this.state.number,
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
            number={this.state.number}
          />
        </Container>
        <Container title="Contacts">
          {this.state.contacts.length ? (
            <ContactsList contacts={this.state.contacts} />
          ) : (
            <p>No contacts</p>
          )}
        </Container>
      </>
    );
  }
}
