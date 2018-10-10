<template>
  <form @submit.prevent="registerClicked">
    <div class="form-group">
      <label for="inputName" >Enter your first name</label>
      <input
        type="text"
        class="form-control"
        id="inputName"
        placeholder="First name"
        v-model="firstName"
        v-on:keyup="onChange"
        v-bind:class="{'is-valid': classObject, 'is-invalid': !classObject }"
        autocomplete="off"
      >
      <div v-show = "!isValid" class="invalid-feedback">
          Пожалуйста, введите Ваше имя.
        </div>
    </div>
    <div class="form-group">
      <label for="inputName">Enter your last name</label>
      <input
        type="text"
        class="form-control"
        id="inputLastName"
        placeholder="Last name"
        v-model="lastName"
        v-on:keyup="onChange"
        v-bind:class="{'is-valid': isValid, 'is-invalid': !isValid }"
        autocomplete="off"
      >
    </div>
    <div class="form-group">
      <label for="inputName">Enter your country</label>
      <input
        type="text"
        class="form-control"
        id="inputCountry"
        placeholder="Country"
        v-model="country"
        v-on:keyup="onChange"
        v-bind:class="{'is-valid': isValid, 'is-invalid': !isValid }"
        autocomplete="off"
      >
    </div>
    <div class="form-group">
      <label for="inputName">Enter your city</label>
      <input
        type="text"
        class="form-control"
        id="inputCity"
        placeholder="City"
        v-model="city"
        v-on:keyup="onChange"
        v-bind:class="{'is-valid': isValid, 'is-invalid': !isValid }"
        autocomplete="off"
      >
    </div>
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
    <div class="form-group">
      <label for="exampleFormControlFile1">Example file input</label>
      <input type="file" class="form-control-file" id="exampleFormControlFile1">
    </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
    <button type="submit" class="btn btn-primary">Register</button>
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
