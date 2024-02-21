// store/index.js
import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: [],
    favorites: []
  },
  mutations: {
    addToCart(state, { product, quantity }) {
      const item = state.cart.find(item => item.product.id === product.id)
      if (item) {
        item.quantity += quantity
      } else {
        state.cart.push({ product, quantity })
      }
    },
    addToFavorites(state, product) {
      if (!state.favorites.includes(product)) {
        state.favorites.push(product)
      }
    }
  },
  actions: {
    addToCart({ commit }, payload) {
      commit('addToCart', payload)
    },
    addToFavorites({ commit }, product) {
      commit('addToFavorites', product)
    }
  },
  getters: {
    cartTotal(state) {
      return state.cart.reduce((total, item) => total + (item.product.price * item.quantity), 0)
    }
  }
})
