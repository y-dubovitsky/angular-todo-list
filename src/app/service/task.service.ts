import { Injectable } from '@angular/core';
import {Category} from '../model/Category';
import {TestData} from '../data/TestData';
import {Task} from '../model/Task';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {TaskDaoImpl} from '../dao/impl/TaskDaoImpl';
import {Priority} from '../model/Priority';

/**
 * This component is responsible for data processing
 */
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // ? Оборачиваем объект Таски[] и теперь мы за ними наблюдаем
  tasksSubject = new BehaviorSubject<Task[]>(TestData.tasks);

  private taskDao = new TaskDaoImpl();

  constructor() { }

  getAllTasks(): Observable<Task[]> {
    return this.taskDao.getAll(); // ? Каким образом будет понятно, что мы получили новое значение?
  }

  /**
   * Returns the task if it is of the given category
   */
  fillTaskByCategories(category: Category): void {
    const filterTasks = TestData.tasks.filter(task => task.category === category);
    this.tasksSubject.next(filterTasks);
  }

  searchTasks(category: Category, searchText: string, status: boolean, priority: Priority): Observable<Task[]> {
    return this.taskDao.search(category, searchText);
  }
}
