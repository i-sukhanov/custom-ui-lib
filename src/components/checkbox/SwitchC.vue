<template>
  <div class="switch">
    <input class="switch--input" type="checkbox" v-model="val" v-bind="$attrs" :id="String(id)" />
    <label class="switch--label" :for="String(id)"> </label>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const emit = defineEmits(['change'])
const { value = false, id = 0 } = defineProps<{
  id?: string | number
  value?: boolean
}>()

const val = computed({
  get() {
    return value
  },

  set(v) {
    emit('change', v)
  }
})
</script>

<style scoped>
@import '@/assets/components/checkbox/switch.css';
</style>
