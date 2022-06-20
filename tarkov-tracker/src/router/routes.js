const routes = [
  {
    // Standard Layout
    path: '',
    component: () => import("/src/components/layout/StandardLayout.vue"),
    children: [
      {
        // Default route
        name: 'dashboard',
        path: '',
        alias: ['/', '/dashboard'],
        meta: { background: 'sunset' },
        component: () => import("/src/pages/TrackerDashboard.vue"),
      },
      {
        path: "/test",
        component: () => import("/src/pages/TrackerDashboard.vue"),
      },
      {
        name: 'settings',
        path: "/settings",
        component: () => import("/src/pages/TrackerDashboard.vue"),
      },
      { 
        path: '/:pathMatch(.*)*', 
        name: 'not-found', 
        component: () => import("/src/pages/NotFound.vue") 
      },
      {
        name: 'login',
        path: "/login",
        meta: { background: 'checkpoint' },
        component: () => import("/src/pages/LoginInterface.vue"),
      },
    ]
  },
];

export default routes;
