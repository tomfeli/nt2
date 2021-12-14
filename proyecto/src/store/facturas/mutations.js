import { AGREGARFACTURA, ELIMINARFACTURA } from './types'

export default {
  [AGREGARFACTURA] (state, data) {
    state.facturas[data.id] = data.datos
  },
  [ELIMINARFACTURA] (state, data) {
    delete state.facturas[data]
  }
}
