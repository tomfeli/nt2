<template>
  <q-card>
    <q-card-section class="row q-mx-md">
      <div class="text-h6">Agregar Medico</div>
      <q-space/>
      <q-btn
        icon="close"
        flat round dense
        v-close-popup
      />
    </q-card-section>
    <form>
      <q-card-section class="q-mx-md">
        <FormApellido v-model:apellido="medico.apellido"/>
        <FormNombre v-model:nombre="medico.nombre"/>
        <FormDomicilio v-model:domicilio="medico.direccion"/>
        <FormDNI v-model:dni="id"/>
        <FormEmail v-model:email="medico.email"/>
        <FormFechaIngreso v-model:fechaingreso="medico.fechaIngreso"/>
        <q-select
          standout="bg-primary text-white"
          transition-show="scale"
          transition-hide="scale"
          options-cover
          label="Especialidad"
          :options="lasEspecialidades"
          v-model="medico.especialidad"
        />
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

import { AGREGARMEDICO } from '../../store/medicos/types'

export default {
  name: 'AltaMedico',
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
      medico: {
        apellido: '',
        nombre: '',
        direccion: '',
        email: '',
        fechaIngreso: '',
        especialidad: ''
      }
    }
  },
  props: ['medicoEditar', 'idEditar'],
  computed: {
    lasEspecialidades: function () {
      return this.$store.state.medicos.especialidades
    }
  },
  methods: {
    submitForm: function () {
      this.$store.commit('medicos/' + AGREGARMEDICO, {
        id: this.id,
        datos: this.medico
      })
      this.$q.notify({
        message: 'Medico Agregado',
        color: 'primary'
      })
      this.$emit('closeEdicionMedico')
    }
  }
}
</script>
