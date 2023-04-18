import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CharacterDetailsView from '../views/CharacterDetailsView.vue'
import EpisodeView from '../views/EpisodeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:id',
      name: 'characterDetails',
      component: CharacterDetailsView
    },
    {
      path: '/episode/:id',
      name: 'episode',
      component: EpisodeView
    }
  ]
})

export default router
