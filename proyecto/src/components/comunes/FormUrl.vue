<template>
  <div class="row q-mb-none">
    <q-input
      standout="bg-primary text-white"
      label="ruta imagen"
      :modelValue="url"
      @update:modelValue="event => $emit('update:url', event)"
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
  name: 'FormUrl',
  props: ['url']
}
</script>
