import {Injectable, Renderer2, RendererFactory2} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {TodoState} from "../store/todo/todo.reducer";
import {todoFeatureSelector} from "../store/todo/todo.selectors";
import {filter} from "rxjs/operators";
import {loadTodoState} from "../store/todo/todo.actions";

export const LOCAL_STORAGE_KEY = 'todoList'

@Injectable({
  providedIn: 'root'
})
export class TodoStorageSyncService {

  private isInit = false;
  private renderer?: Renderer2;

  constructor(
    private store$: Store<TodoState>,
    private rendererFactory: RendererFactory2,
  ) {
    this.renderer = rendererFactory.createRenderer(null,null);
  }

  init(){
    if (this.isInit){
      return
    }
    this.isInit = true
    this.loadFromStorage();

    this.store$.pipe(
      select(todoFeatureSelector),
      filter(state => !!state)
    ).subscribe(
      state => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state))
      }
    )
    if (this.renderer)
    this.renderer.listen(window,'storage',() => this.loadFromStorage())
  }

  private loadFromStorage() {
    const  storageState = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (storageState){
      this.store$.dispatch(loadTodoState({
        storageState: JSON.parse(storageState)
      }))
    }
  }
}
