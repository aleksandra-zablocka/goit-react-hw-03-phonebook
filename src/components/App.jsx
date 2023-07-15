import React, { Component } from 'react';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';

class App extends Component {
  // state = {
  //   contacts: [],
  //   filter: '',
  // };

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = newContact => {
    const { contacts } = this.state;

    const doesContactExist = contacts.some(
      contact =>
        contact.id === newContact.is || contact.name === newContact.name
    );

    if (doesContactExist) {
      alert('There is such contact on the list');
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <div className="book">
        <Form addContact={this.addContact} />
        <ContactList
          contacts={this.state.contacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
