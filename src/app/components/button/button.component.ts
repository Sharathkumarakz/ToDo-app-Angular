import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent  {
  @Input() text: string|undefined;
  @Input() color: string|undefined;
  @Output() BtnClick = new EventEmitter();
  onClick(){
this.BtnClick.emit()
    
  }
  
}
