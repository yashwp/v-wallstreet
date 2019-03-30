<template>
  <div class="home">
    <h1>Trade Display </h1>
    <p>Your funds: {{funds | currency}}</p>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds
    }
  }
}
</script>
