<template>
  <span class="todos-left">{{todosLeft}} unfinished {{ todosLeft === 1 ? 'todo' : 'todos' }}</span>
</template>

<script>
import { store } from '../store/index'

export default {
  name: 'TodosLeft',
  computed: {
    todosLeft() {
      return store.getters.incompleteTodos.length
    },
  },
}
</script>
