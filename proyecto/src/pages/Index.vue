<template>
  <q-page class="flex flex-center">
    {{ losMedicos }}
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
// import AGREGARESPECIALIDAD from '../store/clientes/types'
// import * as operaciones from '../store/clientes/types'

export default defineComponent({
  name: 'PageIndex',
  data () {
    return {
      nuevaEspecialidad: ''
    }
  },
  computed: {
    losMedicos: function () {
      return this.$store.state.clientes.clientes
    }
  }
})
</script>
