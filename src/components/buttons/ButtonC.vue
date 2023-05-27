<template>
  <button class="button" :class="buttonClasses"><slot /></button>
</template>

<script lang="ts" setup>
import { computed, type PropType } from 'vue';

const props = defineProps({
  size: {
    type: String as PropType<'small' | 'medium' | 'large'>,
    default: 'medium',
  },
});

const buttonClasses = computed(() => [`button--${props.size}`]);
</script>

<style scoped>
@import '../../assets/components/button.css';
</style>
