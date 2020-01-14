import {Component} from '@angular/core';
import {Todo} from './todo';
import {TodoDataService} from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {

  newTodo: Todo = new Todo();
  filter: string = '';
  
  todos = [
    {
      complete: false,
      task: "fold clothes"
    },

    {
      complete: false,
      task: "put clothes in dresser"
    },

    {
      complete: false,
      task: "relax"
    },

    {
      complete: true,
      task: "try to pet cat"
    },

    {
      complete: false,
      task: "pet dog"
    },

    {
      complete: false,
      task: "be awesome"
    }
  ];

  constructor(private todoDataService: TodoDataService) {
  }

  addTodo() {
   this.todoDataService.addTodo(this.newTodo);
   this.todos.push( this.newTodo );
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    todo.complete = true;
    //this.todoDataService.toggleTodoComplete(todo);
    console.log(todo.complete);
  }

  removeTodo(i) {
    this.todos.splice(i, 1)
   //  this.todoDataService.deleteTodoById(todo.id);
  }

  getTodos() {
      return this.todos.filter( todo => {
        if ( this.filter ) {
          return todo.task.includes(this.filter)
        } else {
          return true;
        }
      })

  //  return this.todoDataService.getAllTodos();
  }

}
