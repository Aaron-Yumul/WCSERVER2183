import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/home.vue'
import Blog from '../components/blog.vue'
import Gallery from '../components/gallery.vue'
import About from '../components/about.vue'
import Contact from '../components/contact.vue'

const router = createRouter({
  history: createWebHistory(),  
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/blog', name: 'blog', component: Blog },
    { path: '/gallery', name: 'gallery', component: Gallery },
    { path: '/about', name: 'about', component: About },
    { path: '/contact', name: 'contact', component: Contact },
  ],
})

export default router
