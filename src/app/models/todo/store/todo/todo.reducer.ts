import {createReducer, on} from "@ngrx/store";
import {Todo} from "../../models/Todo";
import {todoCreate} from "./todo.actions";

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
  }))
)
