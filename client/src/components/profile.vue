<template>
  <table class="table">
    <thead class="thead-dark">
      <tr >
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">{{profile.id}}</th>
        <td>{{profile.firstName}}</td>
        <td>{{profile.lastName}}</td>
        <td>{{profile.email}}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>

// Файл с методами взаимодействия с backend
import service from '@/services/service'

export default {

  name: 'ProfilePage',

  data () {
    return {
      errors: [],
      profile: {}
    }
  },

  methods: {
    async getProfile (email) {
      const response = await service.fetchProfile(this.email)
      this.profile = response.data
      console.log(response.data)
    }
  },

  // Когда хук сработает запускаем метод получения данных пользователя
  mounted () {
    this.getProfile(this.email)
  }
}
</script>
