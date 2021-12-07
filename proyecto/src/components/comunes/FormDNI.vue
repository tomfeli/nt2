<template>
  <div class="row q-mb-none">
    <q-input
      standout="bg-primary text-white"
      label="DNI"
      :modelValue="dni"
      @update:modelValue="event => $emit('update:dni', event)"
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
  name: 'FormDNI',
  props: ['dni']
}
</script>
