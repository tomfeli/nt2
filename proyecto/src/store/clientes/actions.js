import { AGREGARCLIENTE, ELIMINARCLIENTE, EDITARCLIENTE } from './types'

export default {
  [AGREGARCLIENTE] ({ commit }, cliente) {
    const today = new Date()
    const nuevoCliente = {
      id: cliente.id,
      datos: {
        nombre: cliente.datos.nombre,
        apellido: cliente.datos.apellido,
        direccion: cliente.datos.direccion,
        email: cliente.datos.email,
        fechaIngreso: today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear(),
        act: true
      }
    }
    commit(AGREGARCLIENTE, nuevoCliente)
  },
  [ELIMINARCLIENTE] ({ commit }, id) {
    commit(ELIMINARCLIENTE, id)
  },
  [EDITARCLIENTE] ({ commit }, data) {
    commit(EDITARCLIENTE, data)
  }
}
