<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">V - Wallstreet</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
              aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/portfolio">Portfolio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/stocks">Stocks</router-link>
          </li>
        </ul>
      </div>
      <div class="d-flex align-items-center position-relative">
        <div class="cursor-pointer mr-2" @click="endDay">End Day</div>
        <strong>Funds: {{funds | currency}}</strong>
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
           aria-expanded="false" @click="isDropdownOpen = !isDropdownOpen">
          Save & Load
        </a>
        <div class="dropdown-menu" :class="{'show' : isDropdownOpen}" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Save Data</a>
          <a class="dropdown-item" href="#">Load Data</a>
        </div>
      </div>

    </nav>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data() {
      return {
        isDropdownOpen: false
      }
    },
    computed: {
      funds () {
        return this.$store.getters.funds
      }
    },
    methods: {
      ...mapActions(['randomizeStocks']),
      endDay () {
        this.randomizeStocks()
      }
    }
  }
</script>

<style scoped>

</style>
