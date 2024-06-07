// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Projects from '../views/Projects.vue';
import Skills from '../views/Skills.vue';
import Contact from '../views/Contact.vue';
import AboutMe from '../views/AboutMe.vue'; // Updated import

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: AboutMe }, // Updated route
  { path: '/projects', component: Projects },
  { path: '/skills', component: Skills },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
