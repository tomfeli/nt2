<template>
  <q-card bordered class="q-mx-md q-my-sm">
    <q-img
      src="https://eunamed.com/wp-content/uploads/2021/02/medico-especialista-en-chile-768x512.jpg"
    />
    <q-card-section>
      <div>ID: {{ id }}</div>
      <div>Nombre: {{ medicoProp.nombre }}</div>
      <div>Apellido: {{ medicoProp.apellido }}</div>
      <div>Especialidad: {{ medicoProp.especialidad }}</div>
    </q-card-section>
    <q-btn
      @click="confirmarEliminar"
      label="Eliminar"
      icon="delete"
      flat
      color="negative"
    />
    <q-btn
      @click="modificarMedico"
      label="Modificar"
      icon="settings"
      flat
      color="positive"
    />
    <q-dialog v-model="verModificarMedico" persistent>
      <EdicionMedico
        @closeEdicionMedico="verModificarMedico=false"
        :idEditar="id"
        :medicoEditar="medicoProp"
      />
    </q-dialog>
  </q-card>
</template>

<script>
import { ELIMINARMEDICO } from 'src/store/medicos/types'
import { mapActions } from 'vuex'
import EdicionMedico from './AltaMedico.vue'

export default {
  name: 'MedicoCard',
  components: {
    EdicionMedico
  },
  props: ['medicoProp', 'id'],
  data: function () {
    return {
      verModificarMedico: false
    }
  },
  methods: {
    ...mapActions('medicos', [ELIMINARMEDICO]),
    confirmarEliminar () {
      this.$q.dialog({
        title: 'Eliminar',
        message: '¿Seguro de eliminar el médico?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        console.log('Medico eliminado: ' + this.id)
        this.eliminarMedico(this.id)
        // this.$store.dispatch('medicos/eliminarMedico', 1111)
      })
    },
    modificarMedico () {
      this.verModificarMedico = true
    }
  }
}
</script>
