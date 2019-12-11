<template>
  <div id="app" class="grid">
    <Header />
    <aside>
      <h3>
        Today
      </h3>
    </aside>
    <main>
       <TodoList />
    </main>
  </div>
</template>

<script>
// import { store } from './store/index'
import Header from './components/Header'
import TodoList from './components/TodoList'


export default {
  name: 'app',
  components: {
    Header,
    TodoList,
  },
}
</script>

<style lang="scss">
body {
  background: $bg-color;
  color: $text-color;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
}
aside {
  grid-area: aside;
  padding: $spacing;
  background: #898fff;
  color: $bg-color;
}

main {
  padding: $spacing;
  grid-area: main;
}
</style>
