import { Component } from '@angular/core';
import { TodoItem } from './todoItem';
import { TodoList } from './todoList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'stas-angular';
  private list = new TodoList('Vladimir', [
    new TodoItem('Go for run', true),
    new TodoItem('Get flowers'),
    new TodoItem('Collect tickets'),
  ]);
  get userName(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.list.items.filter((i) => !i.complete).length;
  }

  get items(): readonly TodoItem[] {
    debugger
    return this.list.items.filter((item) => !item.complete || this.showComplete);
  }

  addNewItem(newTask: string) {
    if (!newTask) {
      return;
    }
    this.list.addItem(newTask);
  }

  showComplete: boolean = false;
}
