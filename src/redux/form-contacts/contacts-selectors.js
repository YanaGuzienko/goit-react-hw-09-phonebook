import { createSelector } from '@reduxjs/toolkit';

const getContacts = (state) => state.data.contacts;

const getFilterContacts = (state) => state.data.filter;

const filterContacts = createSelector([getContacts, getFilterContacts], (contacts, filter) => {
  const normalizeFilter = filter.toLowerCase();
  return contacts.filter((contact) => contact.name.toLowerCase().includes(normalizeFilter));
});

// eslint-disable-next-line import/no-anonymous-default-export
export default { getContacts, filterContacts };
