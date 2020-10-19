import { Injectable } from '@angular/core';
import {Category} from '../model/Category';
import {TestData} from '../data/TestData';
import {Task} from '../model/Task';

/**
 * This component is responsible for data processing
 */
@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor() { }

  getCategories(): Category[] {
    return TestData.categories;
  }

  getTasks(): Task[] {
    return TestData.tasks;
  }

  /**
   * Returns the task if it is of the given category
   * @param category
   */
  getTaskByCategories(category: Category): Task[] {
    const filterTasks = TestData.tasks.filter(task => task.category === category);
    console.log(filterTasks);
    return filterTasks;
  }
}
