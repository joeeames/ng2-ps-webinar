import {Component, View, For, If, EventEmitter} from 'angular2/angular2';
import {Inject, bind} from 'angular2/di';
import {todoItems} from 'services/todoItems';

@Component({
	selector: 'todo-list',
  events: ['completed'],
  injectables: [
    bind('todoItems').toValue(todoItems)
  ]
})
@View({
	templateUrl: 'components/todo-list.html',
	directives: [For, If]
})
export class TodoList {
  completed = new EventEmitter();
	constructor(@Inject('todoItems') todoItems) {
		this.items = todoItems;
	}
	setCompleted(item, checked) { // discuss difference between passing in the checkbox, and just passing in the checked value
		item.completed = checked;
    this.completed.next(item);
	}
	completeAll() {
    var that = this;
		this.items.forEach(function(item) {
			that.setCompleted(item, true); // call the other function instead of just setting it here. that way we can raise an event in the other function
		});
	}
	removeItem(item) {
		this.items.splice(this.items.indexOf(item), 1);
	}
	hoveringOver(item) {
		return this.hoveredItem === item;
	}
	hover(item) {
		this.hoveredItem = item;
		console.log(item);
	}
	leave(item) {
		if(this.hoveredItem === item) {
			this.hoveredItem = null;
		}
	}
}

