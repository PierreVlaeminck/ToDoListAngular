import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css'],
})
export class ListTasksComponent{

  @Input() tasks: string[] | undefined;
  @Input() tasksFinish: string[] | undefined;
  @Input() tasksPending:string[] | undefined;
  @Output() delete: EventEmitter<string> = new EventEmitter<string>();
  @Output() update: EventEmitter<string> = new EventEmitter<string>();

  updateTask(task: string): void{
    this.update.emit(task)
  }
  deleteTask(task: string): void {
    this.delete.emit(task);
  }
}
