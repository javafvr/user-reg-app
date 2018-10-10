// Здесь буду размещать методы для взаимодействия с сервером

import api from '@/services/api'

export default {
  // fetchProfile - Получить данные профиля пользователя
  fetchProfile (email) {
    return api().get('profile')
  }
}
