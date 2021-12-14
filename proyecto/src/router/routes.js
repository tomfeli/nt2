
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/clientes', component: () => import('pages/ClientesPage.vue') },
      { path: '/productos', component: () => import('pages/ProductosPage.vue') },
      { path: '/reporte', component: () => import('pages/Report.vue') },
      { path: '/reporte/:nombre', component: () => import('pages/ReporteRespuesta.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
