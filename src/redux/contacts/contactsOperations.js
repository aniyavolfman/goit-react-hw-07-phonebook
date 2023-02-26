import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from 'services/contacts-api';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await contactsAPI.requestContacts(); //payload success
  return response;
});

export const addContact = createAsyncThunk('contacts/addContact', async () => {
  const response = await contactsAPI.addContacts(); //payload success
  return response;
});
