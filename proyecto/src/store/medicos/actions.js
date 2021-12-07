import { AGREGARMEDICO, ELIMINARMEDICO } from './types'

export default {
  [AGREGARMEDICO] ({ commit }, medico) {
    const nuevoMedico = {
      id: medico.id,
      medico
    }
    commit(AGREGARMEDICO, nuevoMedico)
  },
  [ELIMINARMEDICO] ({ commit }, id) {
    commit(ELIMINARMEDICO, id)
  }
}
