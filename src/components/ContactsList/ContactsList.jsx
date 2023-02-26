import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as contactsOperations from 'redux/contacts/contactsOperations';
import { deleteContacts, getContactsList } from 'redux/contacts/contactsSlice';
import { getContactsFilter } from 'redux/filter/filterSlice';
import css from './ContactsList.module.css'

export function ContactsList() {

  const contacts = useSelector(getContactsList);
  const filter = useSelector(getContactsFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);



  const filteredContacts = contacts
    .filter(contact =>
      contact.name.toLowerCase().trim().includes(filter.toLowerCase())
  );

  const handleDelete = event => {
    // dispatch(deleteContacts(event.target.id));
   };

  return (
    <ul className={css.contactsList}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          // onButtonDelete={handleDelete}
          buttonId={id}
        />
      ))}
    </ul>
  );
}


