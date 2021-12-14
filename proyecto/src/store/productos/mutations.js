import { AGREGARPRODUCTO, ELIMINARPRODUCTO, EDITARPRODUCTO } from './types'

export default {
  [AGREGARPRODUCTO] (state, data) {
    state.productos[data.id] = data.datos
  },
  [ELIMINARPRODUCTO] (state, data) {
    state.productos[data].act = false
  },
  [EDITARPRODUCTO] (state, data) {
    state.productos[data.id] = data.datos
  }
}
