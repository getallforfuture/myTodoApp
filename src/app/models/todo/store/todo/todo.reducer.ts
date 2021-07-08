import {createReducer, on} from "@ngrx/store";
import {Todo} from "../../models/Todo";
import {loadTodoState, todoCreate, todoDelete, todoEdit, todoToggle} from "./todo.actions";

export const TODO_REDUCER_NODE = 'todo'

export interface TodoState {
  idIncrement: number,
  todoList: Todo[]
}

export const initialState: TodoState = {
  idIncrement: 1,
  todoList: []
}

export const todoReducer = createReducer(
  initialState,
  on(todoCreate, (state, {name}) => ({
    ...state,
    idIncrement: state.idIncrement + 1,
    todoList: [
      ...state.todoList,
      {
        id: state.idIncrement,
        name: name,
        completed: false
      }
    ]
  })),
  on(todoToggle, (state, {id}) => ({
    ...state,
    todoList: state.todoList.map(todo =>
      todo.id === id ? {
          ...todo,
          completed: !todo.completed
        }
        : todo)
  })),
  on(todoEdit, (state,{id, name}) => ({
    ...state,
    todoList: state.todoList.map( todo => todo.id===id ? {
      ...todo,
      name: name
    }: todo)
  })),
  on(loadTodoState, (state,{storageState}) => ({
    ...storageState
  })),
  on(todoDelete, (state, {id}) => ({
    ...state,
    todoList: state.todoList.filter(todo => todo.id !== id)
  })),

)
