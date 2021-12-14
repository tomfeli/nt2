<template>
  <q-card>
    <q-card-section class="row q-mx-md">
      <div class="text-h6">Agregar Producto</div>
      <q-space/>
      <q-btn
        icon="close"
        flat round dense
        v-close-popup
      />
    </q-card-section>
    <form>
      <q-card-section class="q-mx-md">
        <FormNombre v-model:nombre="producto.nombre"/>
        <FormPrecio v-model:precio="producto.precioUnitario"/>
        <FormUrl v-model:url="producto.img"/>
      </q-card-section>
      <q-card-actions>
        <q-btn
          icon="cancel"
          flat
          color="negative"
          label="Cancelar"
          v-close-popup
        />
        <q-btn
          icon="check"
          flat
          color="positive"
          label="Aceptar"
          @click="submitForm"
        />
      </q-card-actions>
    </form>
  </q-card>
</template>

<script>
import FormNombre from '../comunes/FormNombre.vue'
import FormPrecio from '../comunes/FormPrecio.vue'
import FormUrl from '../comunes/FormUrl.vue'
import { AGREGARPRODUCTO } from '../../store/productos/types'

export default {
  name: 'AltaProducto',
  components: {
    FormNombre,
    FormPrecio,
    FormUrl
  },
  data () {
    return {
      producto: {
        nombre: '',
        precioUnitario: 0,
        img: '',
        act: true
      }
    }
  },
  methods: {
    submitForm: function () {
      this.$store.commit('productos/' + AGREGARPRODUCTO, {
        id: this.cant,
        datos: this.producto
      })
      this.$q.notify({
        message: 'Producto Agregado',
        color: 'primary'
      })
      this.$emit('closeEdicionProducto')
    }
  },
  computed: {
    cant: function () {
      return this.$store.getters['productos/getCant']
    }
  }
}
</script>
