import axios from 'axios';
import {
  addToContactsRequest,
  addToContactsSuccess,
  addToContactsError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './form-contacts-actions';

const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get(`https://connections-api.herokuapp.com/contacts`);
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

const addToContacts = ({ name, number }) => async (dispatch) => {
  const contact = {
    name: name,
    number: number,
  };
  dispatch(addToContactsRequest());

  try {
    const { data } = await axios.post('https://connections-api.herokuapp.com/contacts', contact);

    dispatch(addToContactsSuccess(data));
  } catch (error) {
    dispatch(addToContactsError(error.message));
  }
};

const deleteContact = (contactId) => async (dispatch) => {
  dispatch(deleteContactRequest());
  try {
    await axios.delete(`https://connections-api.herokuapp.com/contacts/${contactId}`);

    dispatch(deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(deleteContactError(error.message));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { addToContacts, deleteContact, fetchContacts };
