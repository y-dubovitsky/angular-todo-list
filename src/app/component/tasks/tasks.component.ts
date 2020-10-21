import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
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

  tasks: Task[];

  displayedColumns: string[] = ['#', 'color', 'id', 'title', 'priority', 'date', 'check'];
  dataSource: MatTableDataSource<Task>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private taskService: TaskService) {  }

  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe(tasks => this.tasks = tasks);
    this.dataSource = new MatTableDataSource();

    this.refreshTable();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
   * This method changes the completion status of the task.
   */
  switchTaskCompleted(task: Task) {
    task.completed = !task.completed;
  }

  private refreshTable() {
    this.dataSource.data = this.tasks;
  }
}
