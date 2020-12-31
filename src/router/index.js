import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Topic from '../views/Topic.vue'
import PageNotFound from '../views/404.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/topic/:topicname',
    name: 'Topic',
    component: Topic
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: PageNotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
