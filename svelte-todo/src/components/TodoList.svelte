<script>
  import {
    writable
  } from 'svelte/store';
  import { todos } from './store/todos';

  let todo = "";

  const showAllTodos = writable(true);

  let allTodos;
  let filteredTodos
  let completedTodos
  let allComplete
  let unfinishedTodos

  const unsubscribe = todos.subscribe(all => {
    allTodos = all
    unfinishedTodos = allTodos.filter(t => !t.isDone)
    filteredTodos = showAllTodos ? allTodos : unfinishedTodos
    completedTodos = filteredTodos.filter(t => t.isDone).length
    allComplete = completedTodos === allTodos
  })

  function addTodo() {
    todos.update(t => [...t, { id: allTodos.length, isDone: false, text: todo }])
    todo = "";
  }

  const handleStatusChange = () => {    
    todos.update(t => [...t])
  }

  const handleShowAllChange = () => {
    showAllTodos.update(t => !t)
  }

</script>

<style lang="scss">
  input {
    margin: 0;
  }
  .todo-list,
  .todo-head {
    margin: 0 auto;
  }

  .todo-list {
    border-radius: 5px;
    color: var(--text-color);
  }

  .todo-head__input {
    width: 100%;
    padding: var(--spacing);
    border: none;
    box-shadow: 0px 1px 5px #eee;
  }

  .todo-options {
    display: flex;
    padding: var(--spacing);
    text-align: right;

    &__checkbox {
      margin-right: 5px;
      align-self: center;
    }
  }

  .todo {
    display: flex;
    padding: 1rem;
    transition: opacity 250ms ease-out;
    background: var(--main-bg);
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

  .todos-info {
    padding: var(--spacing);
    &__heading {
      font-size: 1rem;
      font-weight: 400;
    }
  }
</style>


<form on:submit|preventDefault={addTodo} class="todo-head">
  <label>
    <span class="sr-only">write new todo</span>
    <input type="text" class="todo-head__input" placeholder="add new todo..." bind:value={todo} />
  </label>
</form>
<div class="todos-info">
  <h4 class="heading todos-info__heading">
    {unfinishedTodos.length} unfinished tasks
  </h4>
</div>
<div class="todo-list">
  <ul class="todos">
    {#each filteredTodos as todo}
      <li class="todo {todo.isDone ? 'todo--done' : ''}">
        <label for={`${todo.id}--checkbox`} class="todo__label">
          <span class="sr-only">Mark {todo.text} as complete.</span>
          <input
            id={`${todo.id}--checkbox`}
            type="checkbox"
            class="todo__checkbox"
            on:change={handleStatusChange}
            bind:value={todo.isDone}
            bind:checked={todo.isDone} />
        </label>
        <span class="todo__text">{todo.text}</span>
      </li>
    {/each}
  </ul>
</div>
