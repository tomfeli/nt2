<template>
  <div class="row q-mb-none">
    <q-input
      standout="bg-primary text-white"
      label="Precio"
      :modelValue="precio"
      @update:modelValue="event => $emit('update:precio', event)"
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
  name: 'FormPrecio',
  props: ['precio']
}
</script>
