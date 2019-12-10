import {
	writable
} from 'svelte/store';

const initialTodos = [{
		id: 0,
		isDone: true,
		text: "make a svelte todo list"
	},
	{
		id: 1,
		isDone: false,
		text: "make a vue todo list"
	},
	{
		id: 2,
		isDone: false,
		text: "make a react todo list"
	},
	{
		id: 3,
		isDone: false,
		text: "make a angular todo list"
	}
];

export const todos = writable(initialTodos);
