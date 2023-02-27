import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from 'services/contacts-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const response = await contactsAPI.requestContacts(); //payload success
      return response;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkApi) => {
    try {
      const response = await contactsAPI.addContacts(contact); //payload success
      return response;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    console.log(id)
    try {
      const response = await contactsAPI.deleteContacts(id); //payload success
      return response;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
