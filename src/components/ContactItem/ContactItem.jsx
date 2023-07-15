import css from './ContactItem.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/actions';
// import PropTypes from 'prop-types';

export const ContactItem = () => {
  const contacts = useSelector(state => state.contacts);

  const dispatch = useDispatch();

  const handleDelete = contactId => {
    // console.log(contactId);
    dispatch(removeContact(contactId));
  };

  return contacts.map(contact => (
    <li className={css.listItem} key={contact.id}>
      <span>
        {contact.name}: {contact.number}
      </span>
      <button className={css.button} onClick={() => handleDelete(contact.id)}>
        Delete
      </button>
    </li>
  ));
};

// ContactItem.propTypes = {
//   arrayOfContacts: PropTypes.array,
//   deleteFunction: PropTypes.func,
// };
