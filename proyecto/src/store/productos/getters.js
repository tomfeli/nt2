export default {
  getProductos (state) {
    // Hago un proceso
    const result = {}
    let i = 0
    while (i < Object.keys(state.productos).length) {
      if (state.productos[Object.keys(state.productos)[i]].act) {
        result[Object.keys(state.productos)[i]] = state.productos[Object.keys(state.productos)[i]]
      }
      i++
    }
    return result
  },
  getProductoById: (state) => (id) => {
    let result = null
    let i = 0
    while (i < Object.keys(state.productos).length && result === null) {
      if (parseInt(Object.keys(state.productos)[i]) === id) {
        result = state.productos[Object.keys(state.productos)[i]]
      } else {
        i++
      }
    }
    console.log(result)
    return result
  },
  getCant (state) {
    return Object.keys(state.productos) + 1
  }
}
