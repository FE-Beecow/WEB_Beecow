import axios from 'axios'

export const requestApi = axios.create({baseURL: 'http://localhost:5001/api'})