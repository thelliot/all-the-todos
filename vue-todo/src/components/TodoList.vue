<template>
  <section class="todo-list">
    <form v-on:submit.prevent="addTodo">
      <input type="text" v-model="todo" class="todo-list__input" placeholder="add new todo..." />
    </form>
    <Options />
    <div class="completed" v-if="complete">
      <h3 class="heading heading--medium">🎉All done for today! 🎉</h3>
    </div>
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
      return store.getters.displayAll ? store.getters.todos : store.getters.incompleteTodos
    },
    complete() {
      return store.getters.todos.filter(t => !t.isDone).length === 0
    }
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
.completed {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: $spacing;
  min-height: 200px;
  border: 2px dashed rgba($brand-green, 0.25);
  .heading {
    margin: 0;
  }
}
</style>
