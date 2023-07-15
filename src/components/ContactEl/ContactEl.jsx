import css from './ContactEl.module.css';
import PropTypes from 'prop-types';

const ContactEl = ({ contact, deleteContact }) => {
  const { id, name, number } = contact;

  return (
    <li>
      <p>
        {name}, {number}{' '}
      </p>
      <button className={css.deleteBtn} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

ContactEl.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
  deleteContact: PropTypes.func,
};

export default ContactEl;
