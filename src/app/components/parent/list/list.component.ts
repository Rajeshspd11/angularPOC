import { Component, OnInit } from '@angular/core';
import { DragDropService} from '../../../service/drag-drop.service';
import { transferArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private dragDropService: DragDropService) { }

  public list =[ "Header", "Table","Footer", "Time", "DropDown", "Spinner","Textbox", "Button"]
  // public list = this.dragDropService.list;

  ngOnInit() {
    this.dragDropService.pushBackEvent.subscribe(data =>{
      this.list.push(data);
    })
  }

  drop(event){
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data,event.container.data, 
        event.previousIndex, event.currentIndex);
    
    } else {
       moveItemInArray(this.list, event.previousIndex, event.currentIndex);

    }


  }
 
  

}
