import axios from 'axios'

const token = process.env.REACT_APP_TOKEN

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Accept-Version': '2',
    Authorization: `Bearer ${token}`,
  },
})

export const axiosFilesInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Accept-Version': '2',
    Authorization: `Bearer ${token}`,
  },
  responseEncoding: 'binary',
  responseType: 'arraybuffer',
})
