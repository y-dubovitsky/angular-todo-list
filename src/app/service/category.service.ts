import { Injectable } from '@angular/core';
import {Category} from '../model/Category';
import {TestData} from '../data/TestData';
import {BehaviorSubject, Observable} from 'rxjs';
import {CategoryDaoImpl} from '../dao/impl/CategoryDaoImpl';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoryDao = new CategoryDaoImpl();

  constructor() { }

  getAllCategories(): Observable<Category[]> {
    return this.categoryDao.getAll();
  }

}
