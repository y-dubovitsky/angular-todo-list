import {GeneralDao} from './GeneralDao';
import {Task} from '../model/Task';
import {Category} from '../model/Category';
import {Observable} from 'rxjs';

export interface TaskDao extends GeneralDao<Task>{

  search(category: Category, text: string): Observable<Task>;

  getCompletedTasksInCategory(category: Category): Observable<Task[]>;

}
