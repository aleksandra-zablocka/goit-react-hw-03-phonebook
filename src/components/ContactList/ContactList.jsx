import { Component } from 'react';
import PropTypes from 'prop-types';
import ContactEl from 'components/ContactEl/ContactEl';
import css from './ContactList.module.css';
import Filter from 'components/Filter/Filter';

class ContactList extends Component {
  state = {
    filter: '',
  };

  handleFilterChange = filter => {
    this.setState({ filter });
  };

  filterContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { contacts, deleteContact } = this.props;
    const { filter } = this.state;
    const filteredContacts = this.filterContacts(contacts, filter);

    return (
      <div className={css.contactList}>
        <h2>Contacts</h2>
        <Filter onFilterChange={this.handleFilterChange} filter={filter} />
        <p className={css.label}>Name, number</p>
        {filteredContacts.length > 0 ? (
        <ul>
          {filteredContacts.map(contact => (
            <ContactEl
              key={contact.id}
              contact={contact}
              deleteContact={deleteContact}
            />
          ))}
        </ul>) : (<p className={css.noContacts}>No contacts available</p>)}
      </div>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  deleteContact: PropTypes.func,
};

export default ContactList;
