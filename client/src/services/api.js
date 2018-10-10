// Файл для импорта axios (https://github.com/axios/axios) и его настройки по умолчанию

import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://localhost:8081'
  })
}
