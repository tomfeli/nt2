<template>
  <q-page>
    LOS PRODUCTOS

    <div class="q-pa-md">
      <q-btn
        icon="person_add"
        label="Agregar Producto"
        color="primary"
        v-on:click="verAgregarProducto = true"
      />
    </div>

    <div class="q-ma-lg row justify-start items-start q-gutter-sm">
      <ProductoCard
        v-for="(producto, id) in productos"
        v-bind:key="id"
        :productoProp="producto"
        :id="id"
      />
    </div>

    <q-dialog v-model="verAgregarProducto" persistent>
      <AltaProducto
        @closeEdicionProducto="verAgregarProducto=false"
      />
    </q-dialog>

  </q-page>
</template>

<script>
import ProductoCard from '../components/productos/ProductoCard.vue'
import AltaProducto from '../components/productos/AltaProducto.vue'

export default {
  name: 'ProductosPage',
  components: {
    ProductoCard,
    AltaProducto
  },
  data () {
    return {
      verAgregarProducto: false
    }
  },
  computed: {
    productos: function () {
      return this.$store.getters['productos/getProductos']
    }
  }
}
</script>
