import { AGREGARESPECIALIDAD, AGREGARMEDICO, ELIMINARMEDICO } from './types'

export default {
  [AGREGARESPECIALIDAD] (state, data) {
    state.especialidades.push(data)
  },
  [AGREGARMEDICO] (state, data) {
    state.medicos[data.id] = data.datos
  },
  [ELIMINARMEDICO] (state, data) {
    delete state.medicos[data]
  }
}
