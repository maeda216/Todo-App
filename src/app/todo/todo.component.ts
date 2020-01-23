import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {Todo} from "../todo";

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleted = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  removeTodo() {
    this.deleted.emit();
  }

  toggleTodoComplete(todo) {
    todo.complete = true;
  }

}
