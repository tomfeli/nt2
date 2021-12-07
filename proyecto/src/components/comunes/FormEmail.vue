<template>
  <div class="row q-mb-none">
    <q-input
      standout="bg-primary text-white"
      label="Email"
      :modelValue="email"
      @update:modelValue="event => $emit('update:email', event)"
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
  name: 'FormEmail',
  props: ['email']
}
</script>
