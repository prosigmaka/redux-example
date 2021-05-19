import axios from 'axios'
import {
  setupCache
} from 'axios-cache-adapter'

const cache = setupCache({
  maxAge: 200,
  debug: false,
  exclude: {
    query: false
  }
})

const API_URL = "http://localhost:1212/v1/diglett";

function API() {
  return axios.create({
    baseURL: API_URL,
    adapter: cache.adapter,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
    }
  })
}

function API_LOCAL() {
  return axios.create({
    baseURL: API_URL,
    adapter: cache.adapter,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  })
}

function API_LOGIN(){
  return axios.create({
    baseURL: API_URL,
    adapter:cache.adapter,
    headers:{
      'Content-Type': 'application/json',
    }
  })
}

function APINoToken() {
  return axios.create({
    baseURL: API_URL,
    adapter: cache.adapter
  })
}

function APIFormData() {
  return axios.create({
    baseURL: API_URL,
    adapter: cache.adapter,
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
      'responseType':'blob',
      'Accept': "application/json, text/plain, */*"
    }
  })
}



export {
  API,
  APINoToken,
  APIFormData,
  API_URL,
  API_LOCAL,
  API_LOGIN
}
export default axios