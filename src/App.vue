<template>
  <div class="container" id="app">
    <app-header></app-header>
    <div class="row">
      <div class="col-12">
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'

  export default {
    components: {
      appHeader: Header
    },
    created () {
      this.$store.dispatch('initStocks')
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  .slide-enter-active {
    animation: slide-in 0.2s ease-in forwards;
  }

  .slide-leave-active {
    animation: slide-out 0.2s ease-in forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateY(-15px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-15px);
      opacity: 0;
    }
  }

</style>
