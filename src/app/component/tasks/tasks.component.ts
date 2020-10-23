import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {TaskService} from '../../service/task.service';
import {Task} from '../../model/Task';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Category} from '../../model/Category';
import {Priority} from '../../model/Priority';
import {Observable} from 'rxjs';
import {TaskDao} from '../../dao/TaskDao';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, AfterViewInit {

  tasks: Task[];
  displayedColumns: string[] = ['#', 'color', 'id', 'title', 'priority', 'date', 'check'];
  dataSource: MatTableDataSource<Task>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Output()
  updateTask = new EventEmitter<Task>();

  constructor() {  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();

    this.refreshTable();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  @Input('tasksFromAppComponent') //! Вместо this.taskService.getAllTasks().subscribe(tasks => this.tasks = tasks);
  private set setTasks(tasks: Task[]) {
    this.tasks = tasks;
    this.refreshTable();
  }

  /**
   * This method changes the completion status of the task.
   */
  switchTaskCompleted(task: Task): void {
    task.completed = !task.completed;
  }

  private refreshTable(): void {
    if (!this.dataSource) { return; } //* Checking
    this.dataSource.data = this.tasks;
  }

  onClickTask(task: Task): void {
    this.updateTask.emit(task); //! emit - как я понимаю, выполняет проброс
  }
}
