<template>
  <div class="checkbox_tree_node">
    <CheckboxC
      :value="node.checked"
      :label="node.label"
      :id="node.id"
      :indeterminate="indeterminate"
      @change="handleChange"
    />
    <div class="checkbox_tree_node--children" v-if="node.children && node.children.length > 0">
      <CheckboxTreeNode
        v-for="cNode in node.children"
        :key="cNode.id"
        :node="cNode"
        @update:node="emitChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Node } from '@/types/checkbox'
import CheckboxC from './CheckboxC.vue'

const emit = defineEmits(['update:node'])
const { node } = defineProps<{ node: Node }>()

const indeterminate = computed(() => node?.children?.some((c) => c.checked))

const handleChange = (value: Node['checked']) => {
  emit('update:node', { ...node, checked: value })
}

const emitChange = (node: Node) => {
  emit('update:node', node)
}
</script>

<style scoped>
@import '@/assets/components/checkbox/checkbox-tree-node.css';
</style>
