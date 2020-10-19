import { Injectable } from '@angular/core';
import {Category} from '../model/Category';
import {TestData} from '../data/TestData';
import {Task} from '../model/Task';
import {BehaviorSubject, Subject} from 'rxjs';

/**
 * This component is responsible for data processing
 */
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // ? Оборачиваем объект Таски[] и теперь мы за ними наблюдаем
  tasksSubject = new BehaviorSubject<Task[]>(TestData.tasks);

  constructor() { }

  fillTasks() {
    this.tasksSubject.next(TestData.tasks); // ? Каким образом будет понятно, что мы получили новое значение?
  }

  /**
   * Returns the task if it is of the given category
   * @param category
   */
  fillTaskByCategories(category: Category) {
    const filterTasks = TestData.tasks.filter(task => task.category === category);
    this.tasksSubject.next(filterTasks);
  }
}
