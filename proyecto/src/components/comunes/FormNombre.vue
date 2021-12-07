<template>
  <div class="row q-mb-none">
    <q-input
      standout="bg-primary text-white"
      label="Nombre"
      :modelValue="nombre"
      @update:modelValue="event => $emit('update:nombre', event)"
      :rules="[val => !!val || 'Campo Obligatorio']"
    >
    <template v-slot:append>
      <q-icon
        name="close"
        cursor="cursor-pointer"
      />
    </template>
    </q-input>
  </div>
</template>

<script>
export default {
  name: 'FormNombre',
  props: ['nombre']
}
</script>
