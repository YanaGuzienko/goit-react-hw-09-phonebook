import scss from './ContactsList.module.scss';
import { connect } from 'react-redux';
import { operations, contactsSelector } from '../../redux/form-contacts';

function ContactsList({ contacts, deleteContact }) {
  return (
    <>
      {contacts.length > 0 && (
        <ul className={scss.list}>
          {contacts.map((contact) => (
            <li key={contact.id} className={scss.item}>
              <p className={scss.title}>
                {contact.name.slice(0, 45)}: {contact.number}
              </p>
              <button
                type='button'
                onClick={() => {
                  deleteContact(contact.id);
                }}
                className={scss.button}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  contacts: contactsSelector.filterContacts(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    deleteContact: (contactId) => dispatch(operations.deleteContact(contactId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
