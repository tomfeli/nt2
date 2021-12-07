<template>
  <div class="row q-mb-none">
    <q-input
      standout="bg-primary text-white"
      label="FechaIngreso"
      :modelValue="fechaingreso"
      @update:modelValue="event => $emit('update:fechaingreso', event)"
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
  name: 'FormFechaIngreso',
  props: ['fechaingreso']
}
</script>
