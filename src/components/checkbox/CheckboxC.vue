<template>
  <div class="checkbox">
    <input
      class="checkbox--input"
      type="checkbox"
      v-model="val"
      v-bind="$attrs"
      :id="id"
    />
    <label class="checkbox--label" :for="id">
      <TickIcon class="checkbox--check" />
      <span>{{ label }}</span>
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import TickIcon from '@/icons/TickIcon.vue';

const emit = defineEmits(['change']);
const {
  value = false,
  id,
  label = 'checkbox',
} = defineProps<{
  id: string;
  label: string;
  value: boolean;
}>();

defineOptions({
  inheritAttrs: false,
});

const val = computed({
  get() {
    return value;
  },

  set(v) {
    emit('change', v);
  },
});
</script>

<style scoped>
@import '@/assets/components/checkbox/checkbox.css';
</style>
