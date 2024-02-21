<template>
  <div id="app">
    
    <router-link to="/">Home</router-link>
    <router-link to="/favorites">Favorites</router-link>
    <router-link to="/cart">Cart</router-link>

   
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
