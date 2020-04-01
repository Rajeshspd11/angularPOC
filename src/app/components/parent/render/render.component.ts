import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, transferArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';

import { DragDropService} from '../../../service/drag-drop.service';


@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.css']
})
export class RenderComponent implements OnInit {

  constructor( private dragDropService : DragDropService) { }
  // renderList = this.dragDropService.list;
  renderList = [];

  ngOnInit() {
  }

  drop(event) {
    if (event.previousContainer !== event.container) {
      //callPushBack here

      //empty arrrayif
      if(this.renderList[0]!=null && this.renderList[0]!="" && this.renderList[0]!=undefined){
        this.dragDropService.pushBackEvent.emit(this.renderList[0]);
        this.renderList.splice(0);
      }

      transferArrayItem(event.previousContainer.data,event.container.data, 
        event.previousIndex, event.currentIndex);

    } else {
      moveItemInArray(this.renderList, event.previousIndex, event.currentIndex);

      this.renderList.push(event.previousContainer.data[event.previousIndex]);
      this.renderList.shift();

    }
  }

}
