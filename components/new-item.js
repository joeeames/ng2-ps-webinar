import {Component, View} from 'angular2/angular2';
import {Inject, bind} from 'angular2/di';
import {todoItems} from 'services/todoItems';

@Component({
	selector: 'new-item',
  injectables: [
    bind('todoItems').toValue(todoItems)
  ]
})
@View({
	templateUrl: 'components/new-item.html'
})
export class NewItem {
	constructor(@Inject('todoItems') todoItemList) {
    this.items = todoItemList
	}
	keyPressed($event, input) {
		if($event.which === 13) {
			this.addItem(input);
		}
	}
	addItem(input) {
		this.items.push({
			text: input.value,
			completed: false
		})
		input.value = '';
	}
}

