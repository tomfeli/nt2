<template>
  <q-card bordered class="q-mx-md q-my-sm">
    <q-img
      :src="productoProp.img"
    />
    <q-card-section>
      <div>ID: {{ id }}</div>
      <div>Nombre: {{ productoProp.nombre }}</div>
      <div>precioUnitario: {{ productoProp.precioUnitario }}</div>
    </q-card-section>
    <q-btn
      @click="confirmarEliminar"
      label="Eliminar"
      icon="delete"
      flat
      color="negative"
    />
    <q-btn
      @click="modificarProducto"
      label="Modificar"
      icon="settings"
      flat
      color="positive"
    />
    <q-dialog v-model="verModificarProducto" persistent>
      <EdicionProducto
        @closeEdicionProducto="verModificarProducto=false"
        :idEditar="id"
        :productoEditar="productoProp"
      />
    </q-dialog>
  </q-card>
</template>

<script>
import { ELIMINARPRODUCTO } from 'src/store/productos/types'
import { mapActions } from 'vuex'
import EdicionProducto from './EditProducto.vue'

export default {
  name: 'ProductoCard',
  components: {
    EdicionProducto
  },
  props: ['productoProp', 'id'],
  data: function () {
    return {
      verModificarProducto: false
    }
  },
  methods: {
    ...mapActions('productos', [ELIMINARPRODUCTO]),
    confirmarEliminar () {
      this.$q.dialog({
        title: 'Eliminar',
        message: '¿Seguro de eliminar el producto?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        console.log('Producto eliminado: ' + this.id)
        this.eliminarProducto(this.id)
        // this.$store.dispatch('medicos/eliminarMedico', 1111)
      })
    },
    modificarProducto () {
      this.verModificarProducto = true
    }
  }
}
</script>
