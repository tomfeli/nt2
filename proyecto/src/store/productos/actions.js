import { AGREGARPRODUCTO, ELIMINARPRODUCTO, EDITARPRODUCTO } from './types'

export default {
  [AGREGARPRODUCTO] ({ commit }, producto) {
    const nuevoProducto = {
      id: producto.id,
      datos: {
        nombre: producto.datos.nombre,
        precioUnitario: producto.datos.precioUnitario,
        act: true
      }
    }
    commit(AGREGARPRODUCTO, nuevoProducto)
  },
  [ELIMINARPRODUCTO] ({ commit }, id) {
    commit(ELIMINARPRODUCTO, id)
  },
  [EDITARPRODUCTO] ({ commit }, data) {
    commit(EDITARPRODUCTO, data)
  }
}
