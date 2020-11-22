<template>
  <div class="navbar">
    <nav class="nav-extended grey darken-3">
      <div class="nav-content">
        <router-link :to="{ name: 'Index' }">
          <span class="nav-title"> Mads' CRUD app</span>
        </router-link>
        <a class="btn-floating btn-large halfway-fab amber darken-4" href="">
          <router-link :to="{ name: 'AddFood' }">
            <i class="material-icons">add</i>
          </router-link>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return{

        }
    }
}
</script>

<style>
.navbar nav {
  padding: 0 20px;
}
</style>