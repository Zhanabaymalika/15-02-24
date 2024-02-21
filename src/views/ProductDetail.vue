<!-- ProductDetail.vue -->
<template>
    <div>
      <h1>{{ product.name }}</h1>
      <p>{{ product.description }}</p>
      <p>Price: {{ product.price }}</p>
      <button @click="addToCart(product)">Add to Cart</button>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
 
  export default {
    name: 'ProductDetail',
    props: ['id'],
    setup(props) {
      const store = useStore()
     
      const product = computed(() => {
        const id = parseInt(props.id)
        return store.state.products.find(product => product.id === id)
      })
  
      const addToCart = (product) => {
        const quantity = parseInt(prompt("Enter quantity", "1"))
        if (!isNaN(quantity) && quantity > 0) {
          store.dispatch('addToCart', { product, quantity })
        }
      }
  
      return { product, addToCart }
    }
  }
  </script>
  