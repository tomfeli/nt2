<template>
  <q-card bordered class="q-mx-md q-my-sm">
    <q-img
      src="https://miro.medium.com/max/1400/1*OBZJJYHDPSWnsGxa3DLxIg.jpeg"
    />
    <q-card-section>
      <div>ID: {{ id }}</div>
      <div>Nombre: {{ clienteProp.nombre }}</div>
      <div>Apellido: {{ clienteProp.apellido }}</div>
    </q-card-section>
    <q-btn
      @click="confirmarEliminar"
      label="Eliminar"
      icon="delete"
      flat
      color="negative"
    />
    <q-btn
      @click="modificarCliente"
      label="Modificar"
      icon="settings"
      flat
      color="positive"
    />
    <q-dialog v-model="verModificarCliente" persistent>
      <EdicionCliente
        @closeEdicionCliente="verModificarCliente=false"
        :idEditar="id"
        :clienteEditar="clienteProp"
      />
    </q-dialog>
  </q-card>
</template>

<script>
import { ELIMINARCLIENTE } from 'src/store/clientes/types'
import { mapActions } from 'vuex'
import EdicionCliente from './EditCliente.vue'

export default {
  name: 'ClienteCard',
  components: {
    EdicionCliente
  },
  props: ['clienteProp', 'id'],
  data: function () {
    return {
      verModificarCliente: false
    }
  },
  methods: {
    ...mapActions('clientes', [ELIMINARCLIENTE]),
    confirmarEliminar () {
      this.$q.dialog({
        title: 'Eliminar',
        message: '¿Seguro de eliminar el cliente?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        console.log('Cliente eliminado: ' + this.id)
        this.eliminarCliente(this.id)
        // this.$store.dispatch('medicos/eliminarMedico', 1111)
      })
    },
    modificarCliente () {
      this.verModificarCliente = true
    }
  }
}
</script>
