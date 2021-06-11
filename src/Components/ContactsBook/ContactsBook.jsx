import Filter from '../Filter';
import ContactsList from '../ContactsList';
import Form from '../Form';
import scss from '../Container/Container.module.scss';

const ContactsBook = () => {
  return (
    <>
      <h1 className={scss.title}>Phonebook</h1>
      <Form />
      <h2 className={scss.title}>Contacts</h2>
      <Filter />
      <ContactsList />
    </>
  );
};

export default ContactsBook;
