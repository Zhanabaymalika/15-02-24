
<template>
    <div>
      <h1>Cart</h1>
      <div v-for="item in cart" :key="item.product.id">
        {{ item.product.name }} - Quantity: {{ item.quantity }}
      </div>
      <p>Total: {{ total }}</p>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  
  export default {
    name: 'CartFrom',
    setup() {
      const store = useStore()
  
      const cart = computed(() => store.state.cart)
      const total = computed(() => store.getters.cartTotal)
  
      return { cart, total }
    }
  }
  </script>
  