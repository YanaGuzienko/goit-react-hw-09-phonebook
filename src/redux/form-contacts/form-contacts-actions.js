import { createAction } from '@reduxjs/toolkit';

export const addToContactsRequest = createAction('app/AddContactsRequest');
export const addToContactsSuccess = createAction('app/AddContactsSuccess');
export const addToContactsError = createAction('app/AddContactsError');

export const deleteContactRequest = createAction('app/DeleteContactRequest');
export const deleteContactSuccess = createAction('app/DeleteContactSuccess');
export const deleteContactError = createAction('app/DeleteContactError');

export const fetchContactsRequest = createAction('app/fetchContactRequest');
export const fetchContactsSuccess = createAction('app/fetchContactSuccess');
export const fetchContactsError = createAction('app/fetchContactError');

export const onFilterChange = createAction('filter/Change', (name, value) => ({
  payload: {
    name: name,
    value: value,
  },
}));
