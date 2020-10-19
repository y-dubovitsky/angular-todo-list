import { Injectable } from '@angular/core';
import {Category} from '../model/Category';
import {TestData} from '../data/TestData';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categorySubject = new BehaviorSubject<Category[]>(TestData.categories);

  constructor() { }

}
