<template>
  <q-page>
    LOS CLIENTES

    <div class="q-pa-md">
      <q-btn
        icon="person_add"
        label="Agregar medico"
        color="primary"
        v-on:click="verAgregarCliente = true"
      />
    </div>

    <div class="q-ma-lg row justify-start items-start q-gutter-sm">
      <ClienteCard
        v-for="(cliente, id) in clientes"
        v-bind:key="id"
        :clienteProp="cliente"
        :id="id"
      />
    </div>

    <q-dialog v-model="verAgregarCliente" persistent>
      <AltaCliente
        @closeEdicionCliente="verAgregarCliente=false"
      />
    </q-dialog>

  </q-page>
</template>

<script>
import ClienteCard from '../components/clientes/ClienteCard.vue'
import AltaCliente from '../components/clientes/AltaCliente.vue'

export default {
  name: 'ClientesPage',
  components: {
    ClienteCard,
    AltaCliente
  },
  data () {
    return {
      verAgregarCliente: false
    }
  },
  computed: {
    clientes: function () {
      return this.$store.getters['clientes/getClientes']
    }
  }
}
</script>
