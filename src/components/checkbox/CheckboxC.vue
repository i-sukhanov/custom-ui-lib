<template>
  <div class="checkbox">
    <input
      class="checkbox--input"
      type="checkbox"
      :name="name"
      :id="id"
      v-model="val"
    />
    <label class="checkbox--label" :for="id"> {{ label }}</label>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import TickIcon from '@/icons/TickIcon.vue';

const emit = defineEmits(['change']);
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: 'checkbox',
  },
  name: {
    type: String,
  },
  value: {
    type: [Boolean, String],
    default: false,
  },
});

const val = computed({
  get() {
    return props.value;
  },

  set(value) {
    emit('change', value);
  },
});
</script>

<style scoped>
@import '@/assets/components/checkbox/checkbox.css';
</style>
