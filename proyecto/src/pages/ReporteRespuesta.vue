<template>
  <q-page class="flex flex-center">
    <div>
    CLIENTE:
    <hr>
    <ClienteCard
      :clienteProp="cliente($route.params.nombre)"
      :id="$route.params.nombre"
    />
    </div>
    <hr>
    <div
    v-for="(factura, id) in facturas($route.params.nombre)"
    v-bind:key="id"
    >
    <hr>
    PRODUCTOS:
    <hr>
    <ProductoCard
      v-for="(venta, id) in factura.venta"
      v-bind:key="id"
      :productoProp="producto(venta.id)"
      :cant="venta.cant"
    />
    <hr>
    FECHA DE FACTURACION:
    <hr>
    {{factura.fecha}}
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import ClienteCard from '../components/clientes/ClientCardShow.vue'
import ProductoCard from '../components/productos/ProductoCardShow.vue'
// import AGREGARESPECIALIDAD from '../store/clientes/types'
// import * as operaciones from '../store/clientes/types'

export default defineComponent({
  name: 'reporteRespuesta',
  components: {
    ClienteCard,
    ProductoCard
  },
  computed: {
    facturas: function () {
      return this.$store.getters['facturas/getFacturasByClient']
    },
    cliente: function () {
      return this.$store.getters['clientes/getClienteById']
    },
    producto: function () {
      return this.$store.getters['productos/getProductoById']
    }
  }
})
</script>
