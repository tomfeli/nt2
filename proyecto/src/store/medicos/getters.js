export default {
  getMedicos (state) {
    // Hago un proceso
    return state.medicos
  },
  getTotal (state) {
    let total = 0
    state.items.forEach((item) => {
      total += (item.cantidad * item.precioUnitario)
    })
    return total
  }
}
