import {Component, View, bootstrap} from 'angular2/angular2';
import {NewItem} from 'components/new-item';
import {TodoList} from 'components/todo-list';

@Component({
	selector: 'todo-app'
})
@View({
	templateUrl: 'components/app.html',
	directives: [NewItem, TodoList]
})
export class TodoApp {
	constructor() {
	}
  onCompleted() {
    console.log('completed', arguments)
  }
}

bootstrap(TodoApp);