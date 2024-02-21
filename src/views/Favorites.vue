
<template>
    <div>
      <h1>Favorites</h1>
      <div v-for="product in favorites" :key="product.id">
        {{ product.name }}
      </div>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  
  export default {
    name: 'FavoritesProducts',
    setup() {
      const store = useStore()
  
      const favorites = computed(() => store.state.favorites)
  
      return { favorites }
    }
  }
  </script>
  