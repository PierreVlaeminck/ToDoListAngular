import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css']
})
export class FormTaskComponent {
  newTask: string = '';
  selectedTask: string = '';

  constructor(private taskService: TaskService) {} // Injection du TaskService dans le constructeur
  private task: any;

  addTask() {
    let taskName = this.newTask ? this.newTask : this.selectedTask;

    if(taskName) {
      const task = {
        id: 'task-' + (this.taskService.getTasks().length + 1),
        taskname: taskName,
        status: 'pending'
      };

      this.taskService.addTask(task);
    }

    this.newTask = '';
    this.selectedTask = '';
  }
}
