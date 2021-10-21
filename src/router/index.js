import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import About from '../views/About.vue'
// import gallery from '../views/gallery.vue'
// import Contact from '../views/Contact.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Gallery2 from '../views/Gallery2.vue'
import Gallery3 from '../views/Gallery3.vue'
// import Gallery4 from '../views/Gallery4.vue'
// import News from '../views/News.vue'
import Card from '../views/Card.vue'
import Tickets from '../views/Tickets.vue'
// import Directors from '../views/Directors.vue'
// import Single from '../views/Single.vue'
// import Library from '../views/Library.vue'
import Events from '../views/Events.vue'
import Stuff from '../views/Stuff.vue'
import Article from '../views/Article.vue'
// import Category from '../views/Category.vue'
import EventSingle from '../views/EventSingle.vue'
// import ArtSingle from '../views/ArtSingle.vue'
import Video from '../views/Video.vue'
// import Filial from '../views/Filial.vue'
// import hd from '../views/three.vue'
// import Gradus from '../views/Gradus.vue'
import Category2 from '../views/Category2.vue'
// import Buklet from '../views/Buklet.vue'
// import Buklets from '../views/Buklets.vue'

const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
const gallery = () => import('../views/gallery.vue')
const Contact = () => import('../views/Contact.vue')
const Gradus = () => import('../views/Gradus.vue')
const Category = () => import('../views/Category.vue')
const Single = () => import('../views/Single.vue')
const Library = () => import('../views/Library.vue')
const Directors = () => import('../views/Directors.vue')
const News = () => import('../views/News.vue')
const Gallery4 = () => import('../views/Gallery4.vue')
const Filial = () => import('../views/Filial.vue')
const Buklet = () => import('../views/Buklet.vue')
const Buklets = () => import('../views/Buklets.vue')
const ArtSingle = () => import('../views/ArtSingle.vue')


Vue.use(VueRouter)
// function lazyLoad(view){
//   return() => import(`@/views/${view}.vue`)
// }

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home

  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path:'/gallery',
    name: 'gallery',
    component: gallery
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
 {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/gallery2',
    name: 'Gallery2',
    component: Gallery2
  },
  {
    path: '/gallery3',
    name: 'Gallery3',
    component: Gallery3
  },
  {
    path: '/gallery4',
    name: 'Gallery4',
    component: Gallery4
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/card',
    name: 'Card',
    component: Card
  },
  {
    path: '/tickets',
    name: 'Tickets',
    component: Tickets
  },
  {
    path: '/directors',
    name: 'Directors',
    component: Directors
  },
  {
    path: '/buklet/:id',
    name: 'Buklet',
    component: Buklet
  },
  {
    path: '/buklets',
    name: 'Buklets',
    component: Buklets
  },
  {
    path: '/directors',
    name: 'Directors',
    component: Directors
  },
  {
    path: '/single/:id',
    name: 'Single',
    component: Single
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: Category
  },
  {
    path: '/category2/:id',
    name: 'Category2',
    component: Category2
  },
  {
    path: '/library',
    name: 'Library',
    component: Library
  },
  {
    path: '/events',
    name: 'Events',
    component: Events
  },
  {
    path: '/eventSingle/:id',
    name: 'eventSingle',
    component: EventSingle
  },
  {
    path: '/artSingle/:id',
    name: 'ArtSingle',
    component: ArtSingle
  },
  {
    path: '/stuff',
    name: 'Stuff',
    component: Stuff
  },
  {
    path: '/article',
    name: 'Article',
    component: Article
  },
  {
    path: '/video',
    name: 'Video',
    component: Video
  },
  {
    path: '/filial',
    name: 'Filial',
    component: Filial
  },
  // {
  //   path: '/3d',
  //   name: 'hd',
  //   component: hd
  // },
  {
    path: '/gradus',
    name: 'Gradus',
    component: Gradus
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
