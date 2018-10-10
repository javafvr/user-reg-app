<template>
  <div id="app">
    <appHeader></appHeader>
    <router-view/>
    <appFooter></appFooter>
  </div>
</template>

<script>

import appHeader from '@/components/appHeader'
import appFooter from '@/components/appFooter'

export default {
  name: 'App',
  components: {
    appHeader,
    appFooter
  }
}
</script>
