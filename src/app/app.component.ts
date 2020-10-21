import {Component, OnInit} from '@angular/core';
import { Task } from './model/Task';
import {TaskService} from './service/task.service';
import {Category} from './model/Category';
import {CategoryService} from './service/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/css/material-dashboard.css']
})
export class AppComponent implements OnInit {

  title = 'angular-to-do-list';
  tasks: Task[];
  categories: Category[];

  constructor(
    private taskService: TaskService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe(tasks => this.tasks = tasks); //! Подписываемся на изменение данных
    this.categoryService.getAllCategories().subscribe(categories => this.categories = categories);
  }

}
