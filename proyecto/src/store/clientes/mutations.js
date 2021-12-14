import { AGREGARCLIENTE, ELIMINARCLIENTE, EDITARCLIENTE } from './types'

export default {
  [AGREGARCLIENTE] (state, data) {
    state.clientes[data.id] = data.datos
  },
  [ELIMINARCLIENTE] (state, data) {
    state.clientes[data].act = false
  },
  [EDITARCLIENTE] (state, data) {
    state.clientes[data.id] = data.datos
  }
}
