import {createAction, props} from "@ngrx/store";

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

