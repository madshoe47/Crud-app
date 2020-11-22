<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components: { Navbar },
  name: 'App',
  componemts: {
    Navbar
  }

}
</script>

<style>
</style>
