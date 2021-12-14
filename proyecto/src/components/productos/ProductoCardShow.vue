<template>
  <q-card bordered class="q-mx-md q-my-sm">
    <q-img
      :src="productoProp.img"
    />
    <q-card-section>
      <div>Nombre: {{ productoProp.nombre }}</div>
      <div>PrecioUnitario: {{ productoProp.precioUnitario }}</div>
      <div>Cant: {{cant}}</div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'ProductoCardShow',
  props: ['productoProp', 'cant']
}
</script>
