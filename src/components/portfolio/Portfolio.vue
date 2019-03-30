<template>
  <div class="portfolio">
    <h1>Portfolio</h1>
    <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
  </div>
</template>

<script>
  import appStock from './Stock'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      appStock
    },
    computed: {
      ...mapGetters({
        stocks: 'stockPortfolio'
      })
    },
    created () {
      console.log(this.stocks)
    }
  }
</script>
