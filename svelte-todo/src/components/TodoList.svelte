<script>
  import { writable } from 'svelte/store';

  const baseId = 0;
  let nextId = baseId;
  let todo = "";

  let initialTodos = [
    { id: baseId, isDone: true, text: "make a svelte todo list" },
    { id: ++nextId, isDone: false, text: "make a vue todo list" },
    { id: ++nextId, isDone: false, text: "make a react todo list" },
    { id: ++nextId, isDone: false, text: "make a angular todo list" }
  ];

  let showAllTodos = true;

  function addTodo() {
    todos = [...todos, { id: ++nextId, isDone: false, text: todo }];
    todo = "";
  }

  $: filteredTodos = showAllTodos ? initialTodos : initialTodos.filter(t => !t.isDone);
  $: allTodos = initialTodos.length;
  $: completedTodos = initialTodos.filter(t => t.isDone).length;
  $: allComplete = completedTodos === allTodos;
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
    padding: var(--spacing) 0;
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
    padding: 2rem;
  }
</style>


<form on:submit|preventDefault={addTodo} class="todo-head">
  <label>
    <span class="sr-only">write new todo</span>
    <input type="text" class="todo-head__input" placeholder="add new todo..." bind:value={todo} />
  </label>
</form>
<label for="show-all-todos" class="todo-options">
  <input
    name="show-all-todos"
    type="checkbox"
    class="todo-options__checkbox"
    bind:value={showAllTodos}
    bind:checked={showAllTodos} 
  />
  show all?
</label>
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
            bind:value={todo.isDone}
            bind:checked={todo.isDone} />
        </label>
        <span class="todo__text">{todo.text}</span>
      </li>
    {/each}
  </ul>
</div>
<div class="todos-info">
  <h2 class="heading">
    you have completed: {completedTodos}/{allTodos} todos
  </h2>
  {#if allComplete}
    <h3>🥳Hurray, all todos are complete! 🥳</h3>
  {/if}
</div>