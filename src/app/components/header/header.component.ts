import { Component } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title:string = 'ToDo';
  showAddTask:boolean|any;
  subscription:Subscription|any;
constructor(private uiservice:UiService){
  this.subscription = this.uiservice.onToggle().subscribe((value)=>this.showAddTask = value)
}


  ToggleAddTask(){
   this.uiservice.toggleAddTask();
  }
}
