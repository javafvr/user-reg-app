import Vue from 'vue'
// import { bus } from './bus.js'

export default new Vue({
  methods: {

    isValid (inputValue, inputType) {
      switch (inputType) {
        case 'text':

          if (inputValue !== '') {
            return true
          }

          break

        case 'email':
          console.log('email')
          break

        default:
          return true
      }
    }
  }
})
