import Vue from 'vue'
import Vuex from 'vuex'
import uuid from 'uuid/v4'
import { initialTodos } from '../constants';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    todos: [...initialTodos],
    displayAll: false,
  },
  getters: {
    todos: (state) => state.todos,
    totalTodos: (state, getters) => getters.todos.length,
    completedTodos: (state, getters) => getters.todos.filter(t => t.isDone).length,
    incompleteTodos: (state, getters) => getters.todos.filter(t => !t.isDone),
    totalCompletedTodos: (state, getters) => getters.todos.filter(t => !t.isDone).length,
    displayAll: (state) => state.displayAll,
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push({ id: uuid(), isDone: false, text: todo })
    },
    completeTodo(state, payload) {
      const index = state.todos.findIndex(t => t.id === payload.todoId)
      state.todos[index].isDone = payload.isDone
    },
    displayAll(state, value) {
      state.displayAll = value
    }
  },
})
