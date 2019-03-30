<template>
  <div class="stocks">
    <h2>Stocks List</h2>
    <div class="stocks-grid">
      <app-stock :stock="stock" v-for="(stock, index) in stocks" :key="index"></app-stock>
    </div>
  </div>
</template>

<script>
  import Stock from './Stock'

  export default {
    components: {
      appStock: Stock
    },
    computed: {
      stocks () {
        return this.$store.getters.stocks
      }
    }
  }
</script>

<style lang="scss">
  .stocks-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(350px, 1fr));
    grid-gap: 35px;
  }
</style>
