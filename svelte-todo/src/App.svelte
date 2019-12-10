<script>
import Header from './components/Header.svelte'
import TodoList from './components/TodoList.svelte'
  export let navItems = [{ title: 'Today', isSelected: true, isComplete: false }, { title: 'Tomorrow', isSelected: false, isComplete: false  }, { title: 'Next Week', isSelected: false, isComplete: false  }]
  
  let todosDone = false

  function handleTodoState(params) {
    
  }
</script>
<style lang="scss">
  aside {
    grid-area: aside;
    padding: var(--spacing);
  }
  main {
    padding: 1em;
    grid-area: main;
  }

  .nav-item {
    padding: 0 0 5px;

    &:not(:first-child) {
      margin-top: 5px;
    }

    &__title {
      &--selected {
        color: var(--brand-blue);
      }
      &--done {
        color: var(--brand-green);
      }
      &--incomplete {
        color: var(--brand-orange);
      }
    }
  }

</style>

<Header class="header"/>
<aside>
  <ul class="nav-items">
    {#each navItems as item}
      <li class="nav-item">
        <h3 class="nav-item__title {item.isSelected ? 'nav-item__title--selected' : ''}">{item.title}</h3>
      </li>
    {/each}
  </ul>
</aside>
<main>
  <TodoList />
</main>
