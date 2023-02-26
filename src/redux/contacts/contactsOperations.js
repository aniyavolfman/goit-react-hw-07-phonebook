import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from 'services/contacts-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    const response = await contactsAPI.requestContacts(); //payload success
    return response.data;
  }
);

