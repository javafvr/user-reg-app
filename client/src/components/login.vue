<template>
  <form @submit.prevent="registerClicked">
    <div class="form-group">
      <label for="exampleInputEmail1">Email address *</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email"
        v-model="newEmail"
        v-on:keyup="onChange"
        v-bind:class="{'is-valid': onChange, 'is-invalid': !onChange }"
        autocomplete="new-email"
      >
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password *</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        placeholder="Password"
        v-model="newPassword"
        v-on:keyup="onChange"
        v-bind:class="{'is-valid': onChange, 'is-invalid': !onChange }"
        autocomplete="new-password"
      >
    </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
    <button type="submit" class="btn btn-primary">Login</button>
  </form>
</template>
<script>
import validator from './validator.js'

export default {
  data () {
    return {
      errors: [],
      firstName: '',
      lastName: '',
      country: '',
      city: '',
      newEmail: 'inet72@gmail.com',
      newPassword: '123',
      isValid: Boolean
    }
  },

  computed: {
    classObject: function () {
      return {
        // 'is-valid': validator.isValid(e.target.value, e.target.type),
        // 'is-invalid': !validator.isValid(e.target.value, e.target.type)
      }
    }
  },

  methods: {
    onChange (e) {
      console.log(this)
      return validator.isValid(e.target.value, e.target.type)
    },

    registerClicked () {
      console.log(this.newEmail)
    }
  }
}
</script>
