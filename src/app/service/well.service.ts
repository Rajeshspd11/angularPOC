import { Injectable, EventEmitter } from '@angular/core';
import { well } from '../model/well.model';

@Injectable({
  providedIn: 'root'
})
export class WellService {
  public selectedWell = new EventEmitter<well>();
  constructor() { }
}
