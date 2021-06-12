import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import scss from './ContactsList.module.scss';
import { operations, contactsSelector } from '../../redux/form-contacts';
// import { userSelector } from '../../redux/auth';

// function ContactsList({ contacts, deleteContact }) {
//   return (
//     <>
//       {contacts.length > 0 && (
//         <ul className={scss.list}>
//           {contacts.map((contact) => (
//             <li key={contact.id} className={scss.item}>
//               <p className={scss.title}>
//                 {contact.name.slice(0, 45)}: {contact.number}
//               </p>
//               <button
//                 type='button'
//                 onClick={() => {
//                   deleteContact(contact.id);
//                 }}
//                 className={scss.button}
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </>
//   );
// }

// const mapStateToProps = (state) => ({
//   contacts: contactsSelector.filterContacts(state),
// });

// const mapDispatchToProps = (dispatch) => {
//   return {
//     deleteContact: (contactId) => dispatch(operations.deleteContact(contactId)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);

export default function ContactsList() {
  // console.log(contactsSelector.filterContacts);
  // const contacts = useSelector(contactsSelector.getContacts);
  // const filterContacts = useSelector(contactsSelector.getFilterContacts);
  // const filterContact = useSelector(contactsSelector.filterContacts(contacts, filterContacts));
  const contacts = useSelector(contactsSelector.filterContacts);

  const dispatch = useDispatch();

  const deleteOnClick = useCallback(
    (contactId) => {
      dispatch(operations.deleteContact(contactId));
    },
    [dispatch]
  );

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
                  deleteOnClick(contact.id);
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     deleteContact: (contactId) => dispatch(operations.deleteContact(contactId)),
//   };
// };
