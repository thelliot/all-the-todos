<template>
  <section class="todo-list">
    <form v-on:submit.prevent="addTodo">
      <input type="text" v-model="todo" class="todo-list__input" placeholder="add new todo..." />
    </form>
    <Options />
    <ol class="todo-list__todos">
      <TodoItem v-for="todo in filteredTodos" :key="todo.id" :todo="todo" />
    </ol>
  </section>
</template>

<script>
import { store } from '../store/index'
import TodoItem from './TodoItem.vue'
import Options from './Options.vue'


export default {
  name: 'TodoList',
  components: {
    Options,
    TodoItem,
  },
  data() {
    return {
      todo: ''
    }
  },
  computed: {
    filteredTodos() {
      return store.getters.displayAll ? store.state.todos : store.getters.incompleteTodos
    },
  },
  methods: {
    addTodo() {
      if (!this.todo) return
      store.commit('addTodo', this.todo)
      this.todo = ''
    },
  },
}
</script>

<style lang="scss">
.todo-list {
  &__input {
    width: 100%;
    padding: $spacing;
    border: none;
    box-shadow: 0px 1px 5px #eee;
  }
}
</style>
