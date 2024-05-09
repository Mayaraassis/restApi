import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../Pages/HomePage.vue'
import formComponent from '../components/formComponent.vue'
import ListComponent from '../components/ListComponent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    children: [
      { path: 'cadastrar', component: formComponent },
      { path: 'listar', component: ListComponent },
    ],
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
