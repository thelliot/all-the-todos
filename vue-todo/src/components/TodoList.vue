<template>
  <section class="todo-list">
    <form v-on:submit.prevent="addTodo">
      <input type="text" v-model="todo" class="todo-list__input" placeholder="add new todo..." />
    </form>
    <Options />
    <div class="completed" v-if="complete">
      <DoneMessage />
    </div>
    <SortableContainer lockAxis="y" v-model="todos" class="todo-list__todos" :transitionDuration="0" :pressDelay="150" @sort-end="reorderTodos">
      <TodoItem v-for="(todo, index) in todos" :index="index" :key="todo.id" :todo="todo" />
    </SortableContainer>
  </section>
</template>

<script>
import { store } from '../store/index'
import TodoItem from './TodoItem.vue'
import Options from './Options.vue'
import DoneMessage from './DoneMessage.vue'
import SortableContainer from './SortableContainer.vue'

export default {
  name: 'TodoList',
  components: {
    Options,
    TodoItem,
    DoneMessage,
    SortableContainer
  },
  data() {
    return {
      todo: '',
      todos: []
    }
  },
  mounted() {
    this.todos = this.filteredTodos
  },
  computed: {
    allTodos() {
      return store.getters.todos
    },
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
    reorderTodos() {
      this.todos = this.filteredTodos
    },
  },
  watch: {
    filteredTodos() {
      this.reorderTodos()
    }
  }
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
  margin-bottom: 12px;
}
</style>
