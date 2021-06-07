import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-create-form-ui',
  templateUrl: './todo-create-form-ui.component.html',
  styleUrls: ['./todo-create-form-ui.component.css']
})
export class TodoCreateFormUiComponent implements OnInit {
  @Output() create = new EventEmitter<string>();

  name = '';

  constructor() { }

  ngOnInit(): void {
  }

  onCreate() {
    if (this.name)
      this.create.emit(this.name)
    this.name = ''
  }
}
