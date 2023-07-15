import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './Form.module.css';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
    contacts: [],
    name: '',
    number: '',
    id: ''
}

class Form extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    id: ''
  };

  //   funkcja do zmiany inputów
  handleChange = e => {
    const { value, name } = e.target;
    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

handleSubmit = e => {
    e.preventDefault();
    const {name, number} = this.state;
    const newContact = {
      id: nanoid(), name, number
    }
    this.props.addContact(newContact)
    this.setState({...INITIAL_STATE})
}

  render() {
    const { name, number } = this.state;

    return (
      <div className={css.phonebook}>
        <h2>Phonebook</h2>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="number">Number</label>
          <input className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={this.handleChange}
            required
          />
          <button className={css.submitBtn} type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  addContact: PropTypes.func,
};

export default Form;
