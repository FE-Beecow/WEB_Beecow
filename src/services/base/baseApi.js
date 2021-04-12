import axios from 'axios'

export const requestApi = axios.create({baseURL: 'http://10.10.10.206:5001/api'})