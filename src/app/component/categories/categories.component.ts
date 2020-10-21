import {Component, Input, OnInit} from '@angular/core';
import {TaskService} from '../../service/task.service';
import {Category} from '../../model/Category';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  @Input()
  categories: Category[];

  // * Текущая категория
  selectedCategory: Category;

  constructor(
    private taskService: TaskService,
    ) { }

  showTasksByCategory(category: Category): void {
    this.selectedCategory = category;
    this.taskService.fillTaskByCategories(category);
  }
}
