<template>
  <Story>
    <CheckboxTree :nodeTree="nodeTree" @update:tree="updateTreeNode" />
  </Story>
</template>

<script setup lang="ts">
import CheckboxTree from '@/components/checkbox/CheckboxTree.vue';
import type { NodeTree } from '@/types/checkbox';
import { reactive } from 'vue';

const nodeTree = reactive([
  {
    id: 0,
    checked: false,
    label: 'node 1',
    children: [
      {
        id: 1,
        checked: false,
        label: 'node 2',
      },
      {
        id: 1.2,
        checked: false,
        label: 'node 2.2',
      },
      {
        id: 1.3,
        checked: false,
        label: 'node 2.3',
      },
      {
        id: 1.4,
        checked: false,
        label: 'node 2.4',
      },
      {
        id: 2,
        checked: false,
        label: 'node 2.5',
        children: [
          {
            id: 3,
            checked: false,
            label: 'node 3',
          },
          {
            id: 4,
            checked: false,
            label: 'node 3.3',
          },
        ],
      },
    ],
  },
]);

const updateTreeNode = (tree: NodeTree) => {};
</script>
