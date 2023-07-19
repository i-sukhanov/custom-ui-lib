<template>
  <CheckboxTreeNode
    v-for="node in treeState"
    :key="node?.id"
    :node="node"
    @update:node="updateTreeNode"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { NodeTree, Node } from '@/types/checkbox'
import CheckboxTreeNode from './CheckboxTreeNode.vue'

const { nodeTree } = defineProps<{ nodeTree: NodeTree }>()
const treeState = ref<NodeTree>(nodeTree)
const emit = defineEmits(['update:tree'])

const updateTreeNode = (node: Node) => {
  const findAndUpdateNode = (nodeList: NodeTree) => {
    nodeList.forEach((n) => {
      if (!n) return

      const hasChildren = Boolean(n.children && n.children.length > 0)

      if (node.id === n.id) {
        n.checked = !n.checked

        if (hasChildren) {
          n.children = n.children?.map((i) => ({
            ...i,
            checked: node.checked
          }))
        }

        return n
      } else if (hasChildren) {
        findAndUpdateNode(n.children!)
      }
    })
  }

  findAndUpdateNode(treeState.value)

  emit('update:tree', treeState.value)
}
</script>
