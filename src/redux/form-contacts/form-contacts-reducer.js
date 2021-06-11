import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addToContactsSuccess, deleteContactSuccess, fetchContactsSuccess } from './form-contacts-actions';
import { onFilterChange } from './form-contacts-actions';

const contacts = createReducer([], {
  [fetchContactsSuccess]: (state, { payload }) => payload,
  [addToContactsSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) => state.filter((contact) => contact.id !== payload),
});

const filter = createReducer('', {
  [onFilterChange]: (state, { payload }) => payload.value,
});

export default combineReducers({
  contacts: contacts,
  filter: filter,
});
