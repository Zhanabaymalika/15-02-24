
<template>
    <div>
      <h1>Products</h1>
      <div v-for="product in products" :key="product.id">
        <router-link :to="{ name: 'ProductDetail', params: { id: product.id }}">{{ product.name }}</router-link>
        <button @click="addToFavorites(product)">Add to Favorites</button>
      </div>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  
  export default {
    name: 'HomePage',
    setup() {
      const store = useStore()
  
      const products = computed(() => store.state.products)
  
      const addToFavorites = (product) => {
        store.dispatch('addToFavorites', product)
      }
  
      return { products, addToFavorites }
    }
  }
  </script>
  