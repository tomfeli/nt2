<template>
  <q-page class="flex flex-center">
    {{ losMedicos }}
    <hr>
    {{ lasEspec }}
    <hr>
    {{ losPacientes }}
    <hr>
    {{ medicosPorGet }}
    <hr>
    <input type="text" v-on:keypress.enter="agregarEspecialidad"
           v-model="nuevaEspecialidad" ref="refEspecialidad"
    >
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
// import AGREGARESPECIALIDAD from '../store/medicos/types'
import * as operaciones from '../store/medicos/types'

export default defineComponent({
  name: 'PageIndex',
  data () {
    return {
      nuevaEspecialidad: ''
    }
  },
  computed: {
    losMedicos: function () {
      return this.$store.state.medicos.medicos
    },
    lasEspec: function () {
      return this.$store.state.medicos.especialidades
    },
    losPacientes: function () {
      return this.$store.state.pacientes.pacientes
    },
    medicosPorGet: function () {
      return this.$store.getters['medicos/getMedicos']
    }
  },
  methods: {
    agregarEspecialidad: function () {
      // Ingresar la nueva especialidad en el store
      // invoco a la mutacion
      const esp = this.$refs.refEspecialidad.value
      this.$store.commit('medicos/' + operaciones.AGREGARESPECIALIDAD, esp)
      // console.log(document.getElementById('esp').value)
      console.log(this.nuevaEspecialidad)
      console.log(this.$refs.refEspecialidad.value)
      this.$refs.refEspecialidad.value = ''
    }
  }
})
</script>
