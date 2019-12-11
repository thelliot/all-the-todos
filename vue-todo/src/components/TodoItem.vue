<template>
  <li class="todo" :class="{'todo--done': todo.isDone }">
    <label :for="`todo--${todo.id}`">
      <input type="checkbox"
             :name="`todo--${todo.id}`"
             :id="`todo--${todo.id}`"
             :value="isDone"
             v-model="isDone"
             @change="completeTodo"
             :checked="isDone"
             class="todo__checkbox"
      >
    </label>
    <span class="todo__text">{{ todo.text }}</span>
  </li>
</template>

<script>
import { store } from '../store/index.js'

export default {
  name: 'TodoItem',
  props: {
    todo: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      isDone: this.todo.isDone
    }
  },
  methods: {
    completeTodo() {
      store.commit('completeTodo', {
        todoId: this.todo.id,
        isDone: this.isDone,
      })
    }
  },
}
</script>

<style lang="scss">
.todo {
  display: flex;
  padding: 1rem;
  transition: opacity 250ms ease-out;
  background:$main-bg;
  border-radius: 5px;
  box-shadow: 0px 1px 5px #eee;
  &:not(:first-child) {
    margin-top: 10px;
  }
  &--done {
    opacity: 0.5;
    text-decoration: line-through;
    color: #2fb471;
  }
  &__label {
    display: flex;
  }
  &__checkbox {
    margin: 0 0.75rem 0 0;
    align-self: center;
  }
}
 </style>
