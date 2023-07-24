import axios from 'axios';

export const API_SUFFIX = {
  BASEURL: process.env.REACT_APP_BACKEND_BASEURL,
  CNP_UPLOAD: 'cnpupload',
  CNP_LIST: 'cnplist',
  CNP: 'cnp',
};

export const instance = axios.create({
  baseURL: API_SUFFIX.BASEURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
