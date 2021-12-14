export default {
  getClientes (state) {
    // Hago un proceso
    var result = {}
    for (const cliente in state.clientes) {
      console.log(cliente)
      if (state.clientes[cliente].act) {
        result[cliente] = state.clientes[cliente]
      }
    }
    return result
  },
  getClienteById: (state) => (id) => {
    let result = null
    let i = 0
    while (i < Object.keys(state.clientes).length && result === null) {
      if (Object.keys(state.clientes)[i] === id) {
        result = state.clientes[Object.keys(state.clientes)[i]]
      } else {
        i++
      }
    }
    return result
  },
  getTotal (state) {
    let total = 0
    state.items.forEach((item) => {
      total += (item.cantidad * item.precioUnitario)
    })
    return total
  }
}
