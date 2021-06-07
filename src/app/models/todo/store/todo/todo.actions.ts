import {createAction, props} from "@ngrx/store";

export const todoCreate = createAction(
  '[TODO] Crete todo',
  props<{name: string}>()
)
