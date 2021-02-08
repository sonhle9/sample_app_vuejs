<template>
  <div className="App">
    <Header />

    <div className="container">
      <router-view/>

      <Footer />
    </div>
  </div>
</template>

<script>
import Header from './components/layouts/Header.vue'
import Footer from './components/layouts/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      name: 'Vishwas',
    }
  },
  beforeCreate() {
    // console.log(this.$store.state.todos)
  },
  methods: {
    increment() {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
