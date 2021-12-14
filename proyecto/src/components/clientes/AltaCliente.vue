<template>
  <q-card>
    <q-card-section class="row q-mx-md">
      <div class="text-h6">Agregar Cliente</div>
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
        <FormDNI v-model:dni="id"/>
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
import FormDNI from '../comunes/FormDNI.vue'
import FormDomicilio from '../comunes/FormDomicilio.vue'
import FormEmail from '../comunes/FormEmail.vue'
import FormFechaIngreso from '../comunes/FormFechaIngreso.vue'

import { AGREGARCLIENTE } from '../../store/clientes/types'

export default {
  name: 'AltaCliente',
  components: {
    FormApellido,
    FormNombre,
    FormDNI,
    FormDomicilio,
    FormEmail,
    FormFechaIngreso
  },
  data () {
    return {
      id: 0,
      cliente: {
        apellido: '',
        nombre: '',
        direccion: '',
        email: '',
        fechaIngreso: ''
      }
    }
  },
  props: ['clienteEditar', 'idEditar'],
  computed: {
    lasEspecialidades: function () {
      return this.$store.state.clientes.especialidades
    }
  },
  methods: {
    submitForm: function () {
      this.$store.commit('clientes/' + AGREGARCLIENTE, {
        id: this.id,
        datos: this.cliente
      })
      this.$q.notify({
        message: 'Cliente Agregado',
        color: 'primary'
      })
      this.$emit('closeEdicionCliente')
    }
  }
}
</script>
