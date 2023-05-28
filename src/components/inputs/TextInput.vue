<template>
  <div class="text-input">
    <div v-if="label">
      <label :for="id" class="text-input--label">
        <span>{{ label }}</span>
        <span v-if="required" class="text-input--star">* &nbsp;</span>
      </label>
    </div>
    <div>
      <input type="text" v-model="modelValue" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  value: {
    type: String,
  },
  id: {
    type: String,
  },
  required: {
    type: Boolean,
    default: false,
  },
  label: {
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

<style scoped>
@import '../../assets/components/text-input.css';
</style>
