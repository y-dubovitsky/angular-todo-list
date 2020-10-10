import {Category} from '../model/Category';
import {Priority} from '../model/Priority';
import {Task} from '../model/Task';

/**
 * Class with test data.
 */
export class TestData {

  static categories: Category[] = [
    {id: 1, title: 'Work'},
    {id: 2, title: 'Go for a walk'},
    {id: 3, title: 'Sleep'},
    {id: 4, title: 'Eat'},
    {id: 5, title: 'Play computer games'},
    {id: 6, title: 'Sex with alive woman'},
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
      title: 'C:\\Program Files\\nodejs\\node.exe" "C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js" run start --scripts-prepend-node-path=auto'
    },
    {
      id: 3,
      priority: TestData.priority[3],
      category: TestData.categories[3],
      completed: false,
      date: new Date(),
      title: '> ng serve'
    },
    {
      id: 4,
      priority: TestData.priority[1],
      category: TestData.categories[2],
      completed: false,
      date: new Date(),
      title: 'chunk {polyfills} polyfills.js'
    },
    {
      id: 5,
      priority: TestData.priority[1],
      category: TestData.categories[5],
      completed: false,
      date: new Date(),
      title: 'open your browser on http://localhost:4200/'
    }
  ];
}
