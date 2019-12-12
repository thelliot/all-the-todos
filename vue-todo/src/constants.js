import uuid from 'uuid/v4'

export const DONE_MESSAGES = [
  { emoji: '🙌', text: 'That\'s everything!' },
  { emoji: '🚀', text: 'All done.\nThe future is yours.' },
  { emoji: '🤘', text: 'All caught up.\nWhat’s next?' },
  { emoji: '🎉', text: 'There.\nAll done.' },
  { emoji: '🤩', text: 'That\'s everything!' },
  { emoji: '🤠', text: 'There.\nAll done.' },
  { emoji: '🍃', text: 'All done!' },
  { emoji: '✨', text: 'All done.\nThe future is yours.' },
  { emoji: '☀️', text: 'There.\nAll done.' },
  { emoji: '🍻', text: 'Congratulations, no tasks left!' },
]

export const initialTodos = [
  {
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