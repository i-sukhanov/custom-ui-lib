<template>
  <input :type="type" v-model="modelValue" />
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
  type: {
    type: String as PropType<'text' | 'number'>,
    default: 'text',
  },
});

const modelValue = defineModel<string | number>({ default: '' });
</script>
