<template>
  <section class="todo-list">
    <form v-on:submit.prevent="addTodo">
      <input type="text" v-model="todo" class="todo-list__input" placeholder="add new entry..." />
    </form>
    <Options />
    <div class="completed" v-if="complete">
      <DoneMessage />
    </div>
    <SortableContainer lock-axis="y" v-model="todos" class="todo-list__todos" :transition-duration="0" :press-delay="150" @sort-end="updateTodos">
      <DraggableItem v-for="(todo, index) in todos" :key="todo.id" :index="index" class="todo">
        <TodoItem :todo="todo" />
      </DraggableItem>
    </SortableContainer>
    <div v-if="showCompletedTodos" class="completed-todos">
      <ol class="todo-list__todos">
        <li v-for="todo in completeTodos" :key="todo.id" class="todo" >
          <TodoItem :todo="todo" />
        </li>
      </ol>
    </div>
  </section>
</template>

<script>
import { store } from '../store/index'
import TodoItem from './TodoItem.vue'
import Options from './Options.vue'
import DoneMessage from './DoneMessage.vue'
import SortableContainer from './SortableContainer.vue'
import DraggableItem from './DraggableItem.vue'

export default {
  name: 'TodoList',
  components: {
    Options,
    TodoItem,
    DoneMessage,
    SortableContainer,
    DraggableItem
  },
  data() {
    return {
      todo: '',
      todos: [],
      completeTodos: []
    }
  },
  mounted() {
    this.todos = this.allUncompleteTodos
    this.completeTodos = this.completedTodos
  },
  computed: {
    allUncompleteTodos() {
      return store.getters.incompleteTodos
    },
    showCompletedTodos() {
      return store.getters.displayAll
    },
    completedTodos() {
      return store.getters.todos.filter(t => t.isDone)
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
    updateTodos() {
      this.todos = this.allUncompleteTodos
    },
    updateCompletedTodos() {
      this.completeTodos = this.completedTodos
    }
  },
  watch: {
    allUncompleteTodos() {
      this.updateTodos()
    },
    completedTodos() {
      this.updateCompletedTodos()
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
}

.completed-todos {
  margin-top: $spacing * 3.5;
}
</style>
