import {CategoryDao} from '../CategoryDao';
import {Category} from '../../model/Category';
import {Observable, of} from 'rxjs';
import {TestData} from '../../data/TestData';

export class CategoryDaoImpl implements CategoryDao {

  add(T): Category {
    return undefined;
  }

  delete(id: number): void {
  }

  get(id: number): Category {
    return undefined;
  }

  getAll(): Observable<Category[]> {
    return of(TestData.categories);
  }

  search(title: string): Observable<Category[]> {
    return undefined;
  }

  update(T): Category {
    return undefined;
  }

}
