<template>
  <div id="app" :class="darkTheme ? 'darktheme': 'lighttheme'">
    <site-navbar @toggle_theme="changeTheme"></site-navbar>
    <home class="main-content"></home>
    <site-footer></site-footer>
  </div>
</template>

<script>
import SiteNavbar from '@/components/TheNavbar.vue'
import Home from '@/views/Home.vue';
import SiteFooter from '@/components/TheFooter.vue'

export default {
  components: {
    SiteNavbar,
    Home,
    SiteFooter
  },
  data(){
    return{
      darkTheme: false
    }
  },
  methods: {
    // Gets the checkbox information from the child component
    changeTheme: function(params) {
      this.darkTheme = params;
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.main-content{
  flex-grow: 1;
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
