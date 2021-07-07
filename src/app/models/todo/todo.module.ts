import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {TODO_REDUCER_NODE, todoReducer} from "./store/todo/todo.reducer";
import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { TodoWidgetComponent } from './components/todo-widget/todo-widget.component';
import { TodoCreateFormUiComponent } from './ui/todo-create-form-ui/todo-create-form-ui.component';
import {TodoRouterModule} from "./todo-router.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TodoListUiComponent} from "./ui/todo-list-ui/todo-list-ui.component";
import {TodoListItemUiComponent} from "./ui/todo-list-item-ui/todo-list-item-ui.component";
import {TodoListItemEditUiComponent} from "./ui/todo-list-item-edit-ui/todo-list-item-edit-ui.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer),
    TodoRouterModule,
  ],
  declarations: [
    TodoPageComponent,
    TodoWidgetComponent,
    TodoCreateFormUiComponent,
    TodoListUiComponent,
    TodoListItemUiComponent,
    TodoListItemEditUiComponent
  ],
  exports: []
})
export class TodoModule { }
