<template>
  <div>
    <div class="card">
      <div class="card-header">
        <div class="d-flex justify-content-between">
          <span>{{stock.name}}</span>
          <span>${{stock.price}}</span>
        </div>
      </div>
      <div class="card-body d-flex justify-content-between">
        <input class="pl-2" type="number" placeholder="Quantity" v-model="quantity">
        <button class="btn btn-success" @click="buyStock()" :disabled="isFundsSuffice || quantity <= 0">{{isFundsSuffice ? 'Insuffice' : 'Buy'}}</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['stock'],
    data () {
      return {
        quantity: 0
      }
    },
    computed: {
      isFundsSuffice () {
        return this.stock.price * this.quantity < this.funds
      },
      funds () {
        return this.$store.getters.funds
      }
    },
    methods: {
      buyStock () {
        const order = {
          id: this.stock.id,
          price: this.stock.price,
          quantity: +this.quantity
        }
        this.$store.dispatch('buyStock', order)
        this.quantity = 0
      }
    }
  }
</script>

<style scoped>
  .card-header {
    background-color: #cca;
  }
</style>
