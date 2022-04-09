<template>
  <header class="top-bar spread">
    <nav class="top-bar-nav">
      <router-link to="/" class="top-bar-link">
        <i class="icofont-spoon-and-fork"></i>
        <span>Home</span>
      </router-link>
      <router-link to="/products" class="top-bar-link">
        <span>Products</span>
      </router-link>
      <router-link to="/past-orders" class="top-bar-link">
        <span>Past Orders</span>
      </router-link>
    </nav>
    <!-- making the cart icon clickable -->
    <div @click="toggleSidebar" class="top-bar-cart-link">
      <i class="icofont-cart-alt icofont-1x"></i>
      <span>Cart ({{ totalQuantity }})</span>
    </div>
  </header>
  <!-- temporary placeholder for page content -->
  <router-view :inventory="inventory" :addToCart="addToCart"/>

  <!-- Adding the custom component sidebar created on line 164. -->
  <SideBar
    v-if="showSidebar"
    :toggle="toggleSidebar"
    :cart="cart"
    :inventory="inventory"
    :remove="removeItem"
  />
</template>
<script>
import SideBar from '@/components/SideBar.vue'
// importing inventory
import food from './food.json'

// options object -- each component only knows of the js
// inside the options object of that component
export default {
  components: {
    SideBar
  },
  data () {
    return {
      showSidebar: false,
      inventory: food,
      cart: {}
    }
  },
  computed: {
    totalQuantity () {
      return Object.values(this.cart).reduce((acc, curr) => {
        return acc + curr
      }, 0)
    }
  },
  methods: {
    addToCart (name, quantity) {
      if (!this.cart[name]) this.cart[name] = 0
      console.log(name, quantity)
      // receive no of items and name
      this.cart[name] += quantity
      console.log(this.cart)
    },
    // hiding and showing the sidebar
    toggleSidebar () {
      this.showSidebar = !this.showSidebar
    },
    // removing items from the cart
    removeItem (name) {
      delete this.cart[name]
    }
  }
}
</script>
