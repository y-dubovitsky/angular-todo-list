import {TaskDao} from '../TaskDao';
import {Category} from '../../model/Category';
import {Task} from '../../model/Task';
import {Observable, of} from 'rxjs';
import {TestData} from '../../data/TestData';

export class TaskDaoImpl implements TaskDao{

  add(T): Task {
    return undefined;
  }

  delete(id: number): void {
  }

  get(id: number): Task {
    return undefined;
  }

  getAll(): Observable<Task[]> {
    return of(TestData.tasks);
  }

  getCompletedTasksInCategory(category: Category): Observable<Task[]> {
    return undefined;
  }

  search(category: Category, text: string): Observable<Task[]> {
    let allTasks = TestData.tasks;

    if (category != null) {
      allTasks = allTasks.filter(todo => todo.category === category);
    }

    return of(allTasks); //?
  }

  update(T): Task {
    return undefined;
  }

}
