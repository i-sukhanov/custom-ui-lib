<template>
  <div class="text-input">
    <div v-if="label">
      <label :for="id" class="text-input--label">
        <span>{{ label }}</span>
        <span v-if="required" class="text-input--star">* &nbsp;</span>
      </label>
    </div>
    <div>
      <input type="text" v-model="modelValue" :id="id" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const { value, required = false } = defineProps<{
  value: string;
  id: string;
  required: boolean;
  label: string;
}>();
const emit = defineEmits(['input']);

const modelValue = computed({
  set(val) {
    emit('input', val);
  },
  get() {
    return value;
  },
});
</script>

<style scoped>
@import '@/assets/components/inputs/text-input.css';
</style>
