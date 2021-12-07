import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

import medicos from './medicos'
import pacientes from './pacientes'
import turnos from './turnos'

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      medicos,
      pacientes,
      turnos
    },
    strict: process.env.DEBUGGING
  })

  return Store
})
