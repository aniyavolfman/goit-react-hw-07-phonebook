import axios from 'axios';

axios.defaults.baseURL = 'https://63fb75f94e024687bf78ee0e.mockapi.io/';

const contactsAPI = axios.create({
  params: {
  },
});

export async function requestContacts() {
  const {data} = await contactsAPI.get('contacts');
  return data;
}

export async function addContacts({name, number}) {
  const newContact = {
    name,
    number,
  }
  const response = await contactsAPI.post('contacts', newContact);
  return response;
}