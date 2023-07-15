import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
// addContact
// removeContact
// setFilter

export const addContact = createAction(
  'contacts/addContact',
  (name, number) => {
    return {
      payload: {
        name,
        number,
        id: nanoid(),
      },
    };
  }
);

export const removeContact = createAction(
  'contacts/removeContact',
  contactId => {
    return {
      payload: contactId,
    };
  }
);

export const setFilter = createAction('filter/setFilter', phrase => {
  return {
    payload: phrase,
  };
});
// console.log(addContact('revbrv', 'evkgrev'));
// console.log(removeContact('eswferf'));
// console.log(setFilter('dfvbdfb'));
