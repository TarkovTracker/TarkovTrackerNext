const routes = [
  { path: '/', component: () => import('/src/pages/TrackerDashboard.vue') },
  { path: '/test', component: () => import('/src/pages/TrackerDashboard.vue') },
]

export default routes