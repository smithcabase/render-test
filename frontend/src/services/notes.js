import axios from 'axios';
const baseUrl = '/api/notes';
//const baseUrl = 'https://backend-testing-7woe.onrender.com/api/notes'

const getAll = () => {
  const request = axios.get(baseUrl);
  const nonExisting = {
    id: 10000,
    content: 'This note is not saved to server',
    important: true,
  };
  return request.then(response => response.data.concat(nonExisting));
};

const create = newObject => {
  const request = axios.post(baseUrl, newObject);
  return request.then(response => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  console.log(request);
  return request.then(response => response.data);
};

const noteService = {
  getAll,
  create,
  update
};

export default noteService;