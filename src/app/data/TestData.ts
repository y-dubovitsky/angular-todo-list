import {Category} from '../model/Category';
import {Priority} from '../model/Priority';
import {Task} from '../model/Task';

/**
 * Class with test data.
 */
export class TestData {

  static categories: Category[] = [
    {id: 1, title: 'Work'},
    {id: 2, title: 'Shop'},
    {id: 3, title: 'Eat'},
    {id: 4, title: 'Music'},
    {id: 5, title: 'Friends'},
    {id: 6, title: 'Other'},
  ];

  static priority: Priority[] = [
    {id: 1, color: 'Red', title: 'Very Important'},
    {id: 2, color: 'Green', title: 'Not Important'},
    {id: 3, color: 'Gray', title: 'I will do someday'}
  ];

  static tasks: Task[] = [
    {
      id: 1,
      priority: TestData.priority[1],
      category: TestData.categories[2],
      completed: false,
      date: new Date(),
      title: 'Hop hay la la lay'
    },
    {
      id: 2,
      priority: TestData.priority[2],
      category: TestData.categories[3],
      completed: false,
      date: new Date(),
      title: 'Hello my friend'
    },
    {
      id: 3,
      priority: TestData.priority[2],
      category: TestData.categories[2],
      completed: false,
      date: new Date(),
      title: '> ng serve'
    },
    {
      id: 4,
      priority: TestData.priority[1],
      category: TestData.categories[1],
      completed: false,
      date: new Date(),
      title: '> ng serve'
    },    {
      id: 5,
      priority: TestData.priority[1],
      category: TestData.categories[1],
      completed: false,
      date: new Date(),
      title: '> ng serve'
    },    {
      id: 6,
      priority: TestData.priority[1],
      category: TestData.categories[1],
      completed: false,
      date: new Date(),
      title: '> ng serve'
    },
  ];
}
