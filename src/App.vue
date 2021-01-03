<template>
  <div id="app" :class="darkTheme ? 'darktheme': 'lighttheme'">
    <site-navbar @toggle_theme="changeTheme"></site-navbar>
    <router-view class="main-content"></router-view>
    <back-to-top></back-to-top>
    <site-footer></site-footer>
  </div>
</template>

<script>
import SiteNavbar from '@/components/TheNavbar.vue'
// import Home from '@/views/Home.vue';
import BackToTop from '@/components/BackToTop.vue'
import SiteFooter from '@/components/TheFooter.vue'

export default {
  components: {
    SiteNavbar,
    // Home,
    BackToTop,
    SiteFooter
  },
  data(){
    return{
      darkTheme: true
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
  margin-top: 2rem;
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
