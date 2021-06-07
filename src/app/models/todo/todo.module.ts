import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {TODO_REDUCER_NODE, todoReducer} from "./store/todo/todo.reducer";
import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { TodoWidgetComponent } from './components/todo-widget/todo-widget.component';
import { TodoCreateFormUiComponent } from './ui/todo-create-form-ui/todo-create-form-ui.component';
import {TodoRouterModule} from "./todo-router.module";
import {FormsModule} from "@angular/forms";
import {TodoListUiComponent} from "./ui/todo-list-ui/todo-list-ui.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer),
    TodoRouterModule,
  ],
  declarations: [
    TodoPageComponent,
    TodoWidgetComponent,
    TodoCreateFormUiComponent,
    TodoListUiComponent
  ],
  exports: []
})
export class TodoModule { }
