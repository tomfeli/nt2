export default {
  getFacturasByClient: (state) => (id) => {
    const result = []
    let i = 0
    while (i < Object.keys(state.facturas).length) {
      if (state.facturas[Object.keys(state.facturas)[i]].cliente === parseInt(id)) {
        result.push(state.facturas[Object.keys(state.facturas)[i]])
      }
      i++
    }
    return result
  },
  getFacturas (state) {
    return state.facturas
  }
}
