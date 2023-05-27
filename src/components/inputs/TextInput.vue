<template>
  <input class="text-input" type="text" v-model="modelValue" />
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  value: {
    type: String,
  },
});
const emit = defineEmits(['input']);

const modelValue = computed({
  set(val) {
    emit('input', val);
  },
  get() {
    return props.value;
  },
});
</script>
