<template>
  <button class="button" :class="buttonClasses"><slot /></button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const { size = 'medium' } = defineProps<{
  size: 'small' | 'medium' | 'large'
}>()

const buttonClasses = computed(() => [`button-${size}`])
</script>

<style scoped>
@import '@/assets/components/buttons/button.css';
</style>
