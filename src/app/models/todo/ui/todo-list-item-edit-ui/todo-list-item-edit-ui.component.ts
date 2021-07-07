import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Todo} from "../../models/Todo";

@Component({
  selector: 'app-todo-list-item-edit-ui',
  templateUrl: './todo-list-item-edit-ui.component.html',
  styleUrls: ['./todo-list-item-edit-ui.component.css']
})
export class TodoListItemEditUiComponent implements OnInit {
  @Input() todo?: Todo;
  @Output()
  edit = new EventEmitter<string>();
  form?: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.form = this.fb.group({
      name: [this.todo?.name,[Validators.required]]
    })
  }

  onEdit(){
    if (this.form?.value.name)
      this.edit.emit(this.form.value.name)
  }

  onCancel() {
      this.form?.controls['name'].setValue(this.todo?.name)
  }
}
