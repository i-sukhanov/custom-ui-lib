export type Node = {
  id: number
  checked: boolean
  label: string
  children?: Node[]
}

export type NodeTree = Node[]
