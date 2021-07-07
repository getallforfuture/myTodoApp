import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {TodoState} from "../../store/todo/todo.reducer";
import {todoCreate, todoDelete, todoEdit, todoToggle} from "../../store/todo/todo.actions";
import {todoListSelector} from "../../store/todo/todo.selectors";
import {Observable} from "rxjs";
import {Todo} from "../../models/Todo";

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.css']
})
export class TodoWidgetComponent implements OnInit {

  todoList$: Observable<Todo[]> = this.store$.select(todoListSelector);

  constructor(private store$: Store<TodoState>) { }

  ngOnInit(): void {
  }

  onCreate(name: string) {
    this.store$.dispatch(todoCreate({name}))
  }
  onToggle(id: number){
    this.store$.dispatch(todoToggle({id}))
  }
  onDelete(id: number){
    this.store$.dispatch(todoDelete({id}))
  }

  // @ts-ignore
  onEdit({id, name}) {
    this.store$.dispatch(todoEdit({id, name}))
  }
}
