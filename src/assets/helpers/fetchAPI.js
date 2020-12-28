import { URL } from './api';

const fetchAPI = async () => {
  const res = await fetch(URL);
  return await res.json();
};

export default fetchAPI;
