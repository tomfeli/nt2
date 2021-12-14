<template>
  <q-card>
    <q-card-section class="row q-mx-md">
      <div class="text-h6">Editar Cliente {{this.id}}</div>
      <q-space/>
      <q-btn
        icon="close"
        flat round dense
        v-close-popup
      />
    </q-card-section>
    <form>
      <q-card-section class="q-mx-md">
        <FormApellido v-model:apellido="cliente.apellido"/>
        <FormNombre v-model:nombre="cliente.nombre"/>
        <FormDomicilio v-model:domicilio="cliente.direccion"/>
        <FormEmail v-model:email="cliente.email"/>
        <FormFechaIngreso v-model:fechaingreso="cliente.fechaIngreso"/>
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
import FormApellido from '../comunes/FormApellido.vue'
import FormNombre from '../comunes/FormNombre.vue'
import FormDomicilio from '../comunes/FormDomicilio.vue'
import FormEmail from '../comunes/FormEmail.vue'
import FormFechaIngreso from '../comunes/FormFechaIngreso.vue'

import { EDITARCLIENTE } from '../../store/clientes/types'

export default {
  name: 'EditCliente',
  components: {
    FormApellido,
    FormNombre,
    FormDomicilio,
    FormEmail,
    FormFechaIngreso
  },
  data () {
    return {
      id: this.idEditar,
      cliente: {
        apellido: this.clienteEditar.apellido,
        nombre: this.clienteEditar.nombre,
        direccion: this.clienteEditar.direccion,
        email: this.clienteEditar.email,
        fechaIngreso: this.clienteEditar.fechaIngreso,
        act: true
      }
    }
  },
  props: ['clienteEditar', 'idEditar'],
  methods: {
    submitForm: function () {
      this.$store.commit('clientes/' + EDITARCLIENTE, {
        id: this.id,
        datos: this.cliente
      })
      this.$q.notify({
        message: 'Cliente Editado',
        color: 'primary'
      })
      this.$emit('closeEdicionCliente')
    }
  }
}
</script>
