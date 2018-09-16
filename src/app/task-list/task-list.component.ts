import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [
    {
      uid: '',
      title: 'Learn Angular',
      done: false
    },
    {
      uid: '',
      title: 'Learn Firebase',
      done: false
    }
  ];
  selectedTask: Task;

  constructor() { }

  ngOnInit() {
  }

  onPerformTask(task: Task): void {
    console.log(task);
  }
}
