import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../service/task.service';
import {Category} from '../../model/Category';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];

  // * Текущая категория
  selectedCategory: Category;

  constructor(
    private taskService: TaskService,
    private categoryService: CategoryService
    ) { }

  ngOnInit(): void {
    this.categoryService.categorySubject.subscribe(categories => this.categories = categories);
  }

  showTasksByCategory(category: Category) {
    this.selectedCategory = category;
    this.taskService.fillTaskByCategories(category);
  }
}
