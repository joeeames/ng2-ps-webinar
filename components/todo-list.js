import {Component, View, For, If, EventEmitter} from 'angular2/angular2';
import {Inject, bind} from 'angular2/di';
import {todoItems} from 'services/todoItems';

@Component({
	selector: 'todo-list',
  injectables: [
    bind('todoItems').toValue(todoItems)
  ]
})
@View({
	templateUrl: 'components/todo-list.html',
	directives: [For, If]
})
export class TodoList {
  constructor(@Inject('todoItems') todoItems) {
		this.items = todoItems;
	}
	setCompleted(item, checked) { 
		item.completed = checked;
	}
	completeAll() {
    var that = this;
		this.items.forEach(function(item) {
			that.setCompleted(item, true); 
		});
	}
	removeItem(item) {
		this.items.splice(this.items.indexOf(item), 1);
	}
}

