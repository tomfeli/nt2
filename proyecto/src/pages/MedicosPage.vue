<template>
  <q-page>
    LOS MEDICOS

    <div class="q-pa-md">
      <q-btn
        icon="person_add"
        label="Agregar medico"
        color="primary"
        v-on:click="verAgregarMedico = true"
      />
    </div>

    <div class="q-ma-lg row justify-start items-start q-gutter-sm">
      <MedicoCard
        v-for="(medico, id) in medicos"
        v-bind:key="id"
        :medicoProp="medico"
        :id="id"
      />
    </div>

    <q-dialog v-model="verAgregarMedico" persistent>
      <AltaMedico
        @closeEdicionMedico="verAgregarMedico=false"
      />
    </q-dialog>

  </q-page>
</template>

<script>
import MedicoCard from '../components/medicos/MedicoCard.vue'
import AltaMedico from '../components/medicos/AltaMedico.vue'

export default {
  name: 'MedicosPage',
  components: {
    MedicoCard,
    AltaMedico
  },
  data () {
    return {
      verAgregarMedico: false
    }
  },
  computed: {
    medicos: function () {
      return this.$store.getters['medicos/getMedicos']
    }
  }
}
</script>
