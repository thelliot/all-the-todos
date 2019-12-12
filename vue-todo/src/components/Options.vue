<template>
  <div class="options">
    <span class="options__item">
      <input type="checkbox" name="" id="" v-model="showAllTodos" :value="showAllTodos" @change="updateTodoList" :checked="showAllTodos">
      show completed?
    </span>
  </div>
</template>

<script>
import { store } from '../store/index.js'

export default {
  name: 'Options',
  data() {
    return {
      showAllTodos: store.getters.displayAll,
    }
  },
  methods: {
    updateTodoList() {
      store.commit('displayAll', this.showAllTodos)
    },
  },
}
</script>

<style lang="scss">
.options {
  display: flex;
  padding: $spacing;
  justify-content: space-between;

  &__item {
    &:not(:first-child) {
      margin-left: 5px;
    }
  }
}
</style>
