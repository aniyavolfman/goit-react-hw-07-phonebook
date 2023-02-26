import axios from 'axios';

axios.defaults.baseURL = 'https://63fb75f94e024687bf78ee0e.mockapi.io/';

const contactsAPI = axios.create({
  params: {
  },
});

export async function requestContacts() {
  const response = await contactsAPI.get('contacts');
  return response;
}
