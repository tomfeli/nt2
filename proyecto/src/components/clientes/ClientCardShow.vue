<template>
  <q-card bordered class="q-mx-md q-my-sm">
    <q-img
      src="https://miro.medium.com/max/1400/1*OBZJJYHDPSWnsGxa3DLxIg.jpeg"
    />
    <q-card-section>
      <div>DNI: {{ id }}</div>
      <div>Nombre: {{ clienteProp.nombre }}</div>
      <div>Apellido: {{ clienteProp.apellido }}</div>
      <div>Direccion: {{clienteProp.direccion}}</div>
      <div>Email: {{clienteProp.email}}</div>
      <div>act: {{clienteProp.act}}</div>
    </q-card-section>
  </q-card>
</template>

<script>

export default {
  name: 'ClienteCardShow',
  props: ['clienteProp', 'id']
}
</script>
