<script>
	const baseId = 0
	let nextId = baseId
	let todo = ''

	let todos = [
		{ id: baseId, isDone: true, text: 'make a svelte todo list' },
		{ id: ++nextId, isDone: false, text: 'make a vue todo list' },
		{ id: ++nextId, isDone: false, text: 'make a react todo list' },
		{ id: ++nextId, isDone: false, text: 'make a angular todo list' },
	]

	function addTodo() {
		todos = [...todos, { id: ++nextId, isDone: false, text: todo }]
		todo = ''
	}

	$: allTodos = todos.length
	$: completedTodos = todos.filter(todo => todo.isDone).length
	$: allComplete = completedTodos === allTodos

</script>

<main>
	<h1>todos</h1>
	<form on:submit|preventDefault={addTodo} class="todo-head">
		<input type="text" class="todo-head__input" bind:value={todo}>
	</form>
	<div class="todo-list">
		<ul class="todos">
			{#each todos as todo}
				<li class="todo {todo.isDone ? 'todo--done' : ''}" >
					<input id={`${todo.id}--checkbox`} type="checkbox" class="todo__checkbox" bind:value={todo.isDone} bind:checked={todo.isDone}>
					<span class="todo__text">{todo.text}</span>
				</li>
			{/each}
		</ul>
	</div>
	<div class="todos-info">
			<h2 class="heading">you have completed: {completedTodos}/{allTodos} todos</h2>
			{#if allComplete}
				<h3>🥳Hurray, all todos are complete! 🥳</h3>
			{/if}
		</div>
</main>

<style>
		main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	.todo-list,
	.todo-head {
		max-width: 300px;
		margin: 0 auto;
	}

	.todo-head__input {
		width: 100%;
	}

	.todo {
		display: flex;
		padding: 1rem;
		border-bottom: 1px solid #eee;
		transition: opacity 250ms ease-out;
	}

	.todo__checkbox {
		margin: 0 0.75rem 0 0;
		align-self: center;
	}

	.todo--done {
		opacity: 0.5;
		color: #24aa5c;
	}

	.todos-info {
		padding: 2rem;
	}

</style>