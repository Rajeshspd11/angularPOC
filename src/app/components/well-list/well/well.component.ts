import { Component, OnInit, ViewChild, Input, Output, EventEmitter, ElementRef, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';

import { well } from '../../../model/well.model'
import { WellService } from 'src/app/service/well.service';


@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.css']
})
export class WellComponent implements OnInit {

  @ViewChild('formRef', { static: false }) formRef: NgForm;
  @Output() addWell = new EventEmitter<well>();
  @Input() sourceKey: string;
   @ViewChild('srcKey', { static: false }) elementView: ElementRef;

  bottonDisable: boolean = true;
  refreshFlag: boolean = true;
  well = new well( '', '', "reflext value" );
  

 
  constructor(private wellService: WellService) { }

  ngOnInit() {
    // this.setSourceKey();

    this.wellService.selectedWell.subscribe(data => {
      this.well = data;
      this.sourceKey = data.sourceKey;

    })


  }

  onSubmit(formRef) {
    // this.addWell.emit(new well(formRef.value.name, formRef.value.type, this.elementView.nativeElement.value));
    this.addWell.emit(new well(formRef.value.name, formRef.value.type, this.sourceKey));
    this.formRef.reset();


  }



}
