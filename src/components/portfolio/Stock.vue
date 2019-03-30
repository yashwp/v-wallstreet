<template>
  <div>
    <div class="card">
      <div class="card-header">
        <div class="d-flex justify-content-between">
          <span>{{stock.name}}</span>
          <span>{{stock.quantity}}</span>
          <span>${{stock.price}}</span>
        </div>
      </div>
      <div class="card-body d-flex justify-content-between">
        <input class="pl-2" type="number" placeholder="Quantity" v-model="quantity">
        <button class="btn btn-danger" @click="sellStock()" :disabled="isSufficeQuantity || quantity <= 0">Sell</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    props: ['stock'],
    data () {
      return {
        quantity: 0
      }
    },
    computed: {
      isSufficeQuantity() {
        return this.quantity < this.stock.quantity
      }
    },
    methods: {
      ...mapActions({
        placeSellOrder: 'sellStock'
      }),
      sellStock () {
        const order = {
          id: this.stock.id,
          price: this.stock.price,
          quantity: +this.quantity
        }
        this.placeSellOrder(order)
        this.quantity = 0
      }
    }
  }
</script>

<style scoped>
  .card-header {
    background-color: #abc;
  }
</style>
