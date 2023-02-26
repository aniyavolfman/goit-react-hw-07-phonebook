import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContacts } from './contactsOperations';

const initialState = {
  contacts: {
    items: [],
  },
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  // reducers: {
  //   setContacts(state, action) {
  //     state.contacts.items = action.payload;
  //   },
  //   deleteContacts(state, action) {
  //     state.contacts.items = state.contacts.items.filter(
  //       el => el.id !== action.payload
  //     );
  //   },
  // },

  extraReducers: {
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.contacts.items = payload;
      state.isLoading = false;
    },
    [fetchContacts.pending]: state => {
      state.isLoading = true;
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.contacts.items = payload;
      state.isLoading = false;
    },
    [addContact.pending]: state => {
      state.isLoading = true;
    },
    [addContact.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

// export const { setContacts, deleteContacts } =
//   contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

// selectors

export const getContactsList = state => state.contactData.contacts.items;
