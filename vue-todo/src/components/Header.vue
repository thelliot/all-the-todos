<template>
  <header class="grid--header">
    <div class="logo">
      <Logo />
    </div>
    <div class="list-info">
      <div class="list-info__content">
        <ListTitle :title="title" />
        <TodosLeft />
        <ProgressBar :current-progress="currentProgress" :max="max" />
      </div>
    </div>
  </header>
</template>

<script>
import { store } from '../store/index.js'
import dateTitle from '../helpers/dateFormat'
import Logo from './Logo'
import ListTitle from './ListTitle'
import ProgressBar from './ProgressBar'
import TodosLeft from './TodosLeft'

export default {
  name: 'Header',
  components: {
    Logo,
    ProgressBar,
    ListTitle,
    TodosLeft
  },
  data() {
    return {
      title: dateTitle(new Date()),
    }
  },
  computed: {
    currentProgress() {
      return store.getters.completedTodos
    },
    max() {
      return store.getters.totalTodos
    }
  },
}
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  grid-area: logo;
  padding: $spacing;
  background: $brand-blue;
}
.list-info {
  padding: $spacing;
  grid-area: list-info;
  display: flex;
  align-items: center;
  color: $bg-color;
  background: #898fff;

  &__content {
    display: inline-block;
  }
}
</style>
