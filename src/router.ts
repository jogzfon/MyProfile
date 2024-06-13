import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import AboutPage from './views/AboutPage.vue';
import ContactPage from './views/ContactPage.vue';
import ProjectPage from './views/ProjectPage.vue';

const routes = [
  { path: '/MyProfile/', component: HomePage },
  { path: '/MyProfile/about', component: AboutPage },
  { path: '/MyProfile/contact', component: ContactPage },
  { path: '/MyProfile/projects', component: ProjectPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
