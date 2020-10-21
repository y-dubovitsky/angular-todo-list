import {GeneralDao} from './GeneralDao';
import {Category} from '../model/Category';
import {Observable} from 'rxjs';

/**
 * Category DAO interface
 */
export interface CategoryDao extends GeneralDao<Category>{
  search(title: string): Observable<Category[]>;
}
