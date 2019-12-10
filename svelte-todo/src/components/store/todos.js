import {
	writable
} from 'svelte/store';
import {
	v1 as uuid
} from 'uuid'


const initialTodos = [{
		id: uuid(),
		isDone: true,
		text: "make a svelte todo list"
	},
	{
		id: uuid(),
		isDone: false,
		text: "make a vue todo list"
	},
	{
		id: uuid(),
		isDone: false,
		text: "make a react todo list"
	},
	{
		id: uuid(),
		isDone: false,
		text: "make a angular todo list"
	}
];

export const todos = writable(initialTodos);
