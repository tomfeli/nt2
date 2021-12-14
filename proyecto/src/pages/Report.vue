<template>
    <q-card>
      BUSCAR FACTURAS DE CLIENTE POR DNI
    <FormDNI v-model:dni="dni"/>
    <q-btn
        @click="$router.replace('/reporte/'+dni)"
        icon-right="home"
    >
        Obtener Facturas
    </q-btn>
    </q-card>
</template>
<script>
import FormDNI from '../components/comunes/FormDNI.vue'
export default {
  name: 'PageReport',
  components: {
    FormDNI
  },
  data () {
    return {
      dni: ''
    }
  }
}
</script>
