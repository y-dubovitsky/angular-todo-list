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
  selectedCategory: Category;

  constructor(
    private taskService: TaskService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe(tasks => this.tasks = tasks); //! Подписываемся на изменение данных
    this.categoryService.getAllCategories().subscribe(categories => this.categories = categories);
  }

  onSelectCategory($event: Category): void { //! $event - параметр, который был проброшен от потомка к родителю
    this.selectedCategory = $event;

    this.taskService.searchTasks(
      this.selectedCategory,
      null,
      null,
      null
    ).subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }

  onUpdateTasks($event: Task): void {
    console.log($event);
  }
}
