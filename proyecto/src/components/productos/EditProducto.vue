<template>
  <q-card>
    <q-card-section class="row q-mx-md">
      <div class="text-h6">Editar Producto {{this.id}}</div>
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

import { EDITARPRODUCTO } from '../../store/productos/types'

export default {
  name: 'EditProducto',
  components: {
    FormNombre,
    FormPrecio,
    FormUrl
  },
  data () {
    return {
      id: this.idEditar,
      producto: {
        nombre: this.productoEditar.nombre,
        precioUnitario: this.productoEditar.precioUnitario,
        img: this.productoEditar.img,
        act: true
      }
    }
  },
  props: ['productoEditar', 'idEditar'],
  methods: {
    submitForm: function () {
      this.$store.commit('productos/' + EDITARPRODUCTO, {
        id: this.id,
        datos: this.producto
      })
      this.$q.notify({
        message: 'Producto Editado',
        color: 'primary'
      })
      this.$emit('closeEdicionProducto')
    }
  }
}
</script>
