import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

import clientes from './clientes'
import productos from './productos'
import facturas from './facturas'

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      clientes,
      productos,
      facturas
    },
    strict: process.env.DEBUGGING
  })

  return Store
})
