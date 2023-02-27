import React from 'react';
import { Container } from './Container/Container';
import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { getLoaderStatus } from 'redux/contacts/contactsSlice';
import { useSelector } from 'react-redux';
import { Loader } from './Loader/Loader';

export function App() {
  const isLoading = useSelector(getLoaderStatus);

    return (
      <Container>
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        {isLoading && <Loader />}
        <ContactsList />
      </Container>
    );
  }
