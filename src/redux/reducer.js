import { createReducer } from '@reduxjs/toolkit';
import { addContact, removeContact, setFilter } from './actions';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    state.push(action.payload);
  },
  [removeContact]: (state, action) => {
    const index = state.findIndex(contact => contact.id === action.payload);
    state.splice(index, 1);
  },
});

const filterInitialState = { filter: '' };

export const filterReducer = createReducer(filterInitialState, {
  [setFilter]: (state, action) => {
    state.filter = action.payload;
  },
});
