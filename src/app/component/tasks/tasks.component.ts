import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {TaskService} from '../../service/task.service';
import {Task} from '../../model/Task';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, AfterViewInit {

  @Input() //! Вместо this.taskService.getAllTasks().subscribe(tasks => this.tasks = tasks);
  private tasks: Task[];

  displayedColumns: string[] = ['#', 'color', 'id', 'title', 'priority', 'date', 'check'];
  dataSource: MatTableDataSource<Task>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();

    this.refreshTable();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
   * This method changes the completion status of the task.
   */
  switchTaskCompleted(task: Task): void {
    task.completed = !task.completed;
  }

  private refreshTable(): void {
    this.dataSource.data = this.tasks;
  }
}
