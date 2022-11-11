import http from '../http-common';

const getApiKey = () => http.post();

const getAll = (apikey) => http.get(`${apikey}/books/`);

const create = (book, apikey) => http.post(`${apikey}/books`, book);

const remove = (id, apikey) => http.delete(`${apikey}/books/${id}`);

const BookService = {
  getApiKey,
  getAll,
  create,
  remove,
};

export default BookService;
