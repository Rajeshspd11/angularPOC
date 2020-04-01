import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { well } from '../../model/well.model'
import { WellComponent } from '../well-list/well/well.component'
import { WellService } from 'src/app/service/well.service';

@Component({
  selector: 'app-well-list',
  templateUrl: './well-list.component.html',
  styleUrls: ['./well-list.component.css']
})
export class WellListComponent implements OnInit {

  // @ViewChild(WellComponent): test;
 

  private well: well;
    sourceKey="key2";

  private wells = [
    new well('raj', 'cat1', 'key1'),
    new well('abc', 'cat2', 'key1'),
    new well('def', 'cat3', 'key2'),
    new well('ghi', 'cat1', 'key3')
  ]


  constructor (private wellService: WellService) { }

  ngOnInit() {
  }

  wellAdded(well){
    // this.wells.push(well);
    this.wells.push(Object.assign({}, well));
  }

  wellSelected(well){
    this.wellService.selectedWell.emit(Object.assign({}, well));  }

/*

form below other
check mapping when proper value is being passed and wehen not
create new field from scratch and map
element red
see whether this can be achieved without service

*/
}
