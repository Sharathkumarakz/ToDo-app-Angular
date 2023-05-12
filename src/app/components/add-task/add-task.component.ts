import { Component,Output,EventEmitter} from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
@Output() onAddTask :EventEmitter<Task>= new EventEmitter()

  text: string|any;
  day:string|any;
  reminder:boolean= false
  showAddTask:boolean|any
  subscription:Subscription;

  constructor(private uiservice:UiService){
    this.subscription = this.uiservice.onToggle().subscribe((value)=>this.showAddTask = value)
  }


  onSubmit(){
    if(!this.text){
      alert('please add a task!')
      return
    }
    const newTask = {
      text:this.text,
      day:this.day,
      reminder:this.reminder
    }
this.onAddTask.emit(newTask);


//todo emit event
this.text='';
this.day='';
this.reminder=false;
  }


}
