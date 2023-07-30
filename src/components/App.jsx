import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import Container from './container/Container';
import FormPhone from './form/FormFone';
import ContactsList from './contacts_list/ContactsList';
import Search from './search/Search';

const INITIAL_STATE = {
  contacts: [],
  name: '',
  number: '',
  filter: '',
};
export class App extends Component {
  state = {
    ...INITIAL_STATE,
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  hendleChange = e => {
    const { name, value } = e.target;
    !this.state.contacts.find(
      ({ name }) =>
        name.toLocaleLowerCase() === value.toLocaleLowerCase().trim()
    )
      ? this.setState({
          [name]: value.trim(),
        })
      : alert(` ${value} is already in contavts`);
  };

  hendleSubmit = e => {
    e.preventDefault();

    this.setState(precState => {
      return {
        ...INITIAL_STATE,
        contacts: [
          ...precState.contacts,
          {
            name: this.state.name,
            number: this.state.number,
            id: nanoid(),
          },
        ],
      };
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  hendleSearch = e => {
    const { value } = e.target;
    this.setState({ filter: value.toLowerCase().trim() });
  };

  getFilteredContacts = () => {
    return this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter)
    );
  };

  DeleteAllContact = () => {
    this.setState({ ...INITIAL_STATE });
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
            <>
              <Search click={this.hendleSearch} />
              {this.getFilteredContacts().length ? (
                <ContactsList
                  contacts={this.getFilteredContacts()}
                  onDeleteContact={this.deleteContact}
                  onDeleteAllContact={this.DeleteAllContact}
                  searchName={this.state.name}
                ></ContactsList>
              ) : (
                <p className="not_found">Not found contacts</p>
              )}
            </>
          ) : (
            <p className="not_found">Phone book is empty</p>
          )}
        </Container>
      </>
    );
  }
}
