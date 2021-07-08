import {createAction, props} from "@ngrx/store";
import {TodoState} from "./todo.reducer";

export const todoCreate = createAction(
  '[TODO] Crete todo',
  props<{name: string}>()
)
export const todoToggle = createAction(
  '[TODO] Toggle todo',
  props<{id: number}>()
)
export const todoEdit = createAction(
  '[TODO] Edit todo',
  props<{id: number, name: string}>()
)
export const todoDelete = createAction(
  '[TODO] Delete todo',
  props<{id: number}>()
)
export const loadTodoState = createAction(
  '[TODO] load todo state',
  props<{storageState: TodoState}>()
)

