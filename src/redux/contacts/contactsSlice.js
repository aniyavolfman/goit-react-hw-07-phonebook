import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    setContacts(state, action) {
      state.contacts.items = action.payload;
    },
    deleteContacts(state, action) {
      state.contacts.items = state.contacts.items.filter(
        el => el.id !== action.payload
      );
    },
  },
});

export const { setContacts, deleteContacts } =
  contactsSlice.actions;

export const contactsReducer =
  contactsSlice.reducer;

// selectors

export const getContactsList = state => state.contactData.contacts.items;
