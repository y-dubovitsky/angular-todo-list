import {Category} from '../model/Category';
import {Priority} from '../model/Priority';
import {Task} from '../model/Task';

/**
 * Class with STATIC test data.
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
      date: new Date('1955-3-14'),
      title: 'Dobavili fil\'tratsiyu zadach po kategoriyam.'
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
      title: 'chunk {main} main.js, main.js.map (main) 1.38 MB [initial] [rendered]'
    },
    {
      id: 4,
      priority: TestData.priority[1],
      category: TestData.categories[1],
      completed: false,
      date: new Date(2020, 5, 27),
      title: 'Date: 2020-10-19T12:49:34.959Z - Hash: 283ed2e5466681f9aeaf'
    },
    {
      id: 5,
      priority: TestData.priority[1],
      category: TestData.categories[1],
      completed: false,
      date: new Date(1947, 7, 15),
      title: 'open your browser on http://localhost:4200/'
    },
    {
      id: 6,
      priority: TestData.priority[1],
      category: TestData.categories[1],
      completed: false,
      date: new Date(1955, 3, 15),
      title: 'Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/'
    }
  ];
}
