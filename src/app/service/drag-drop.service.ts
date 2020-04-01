import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DragDropService {

  public list=[1,2,2,3,4]
  public render=[];
  constructor() { }

  pushBackEvent = new EventEmitter<any>();
  pushBack(value){}
}
