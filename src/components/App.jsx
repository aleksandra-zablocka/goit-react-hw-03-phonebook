import React, { Component } from 'react';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  //   name: '',
  //   number: '',
  // };

  addContact = newContact => {
    const { contacts } = this.state;

    const doesContactExist = contacts.some(
      contact =>
        contact.id === newContact.id || contact.name === newContact.name
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

  // componentDidMount() {
  //   // ta metoda na starcie załaduje do ls podane w state kontakty
  //   localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  // }

  componentDidMount() {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.setState({ contacts: JSON.parse(storedContacts) });
    }
  }

  componentDidUpdate() {
    // ta metoda działa zawsze jak aktualizujemy state lub dostajemy props z góry
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

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
