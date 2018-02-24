import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Survey from './views/Survey.vue'
import Summary from './views/Summary.vue'
import Documents from './views/Documents.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/survey',
      name: 'survey',
      component: Survey
    },
    {
      path: '/summary',
      name: 'summary',
      component: Summary
    },
    {
      path: '/documents',
      name: 'documents',
      component: Documents
    },
  ]
})
