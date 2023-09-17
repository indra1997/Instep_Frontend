import { Component, Input, OnInit } from '@angular/core';
import { AppUtilServices } from '../app-util.services';
import { EventDetails } from '../models/eventDetails';


@Component({
  selector: 'app-web-components-card-action',
  templateUrl: './web-components-card-action.component.html',
  styleUrls: ['./web-components-card-action.component.scss']
})
export class WebComponentsCardActionComponent implements OnInit {

  constructor(private codeCp: AppUtilServices) {    
  }

  @Input() event !: EventDetails;

  ngOnInit() {       
  }
  
  codeView=false;
  designView=true;
  
  codeCopy(thisElement: any){
    this.codeCp.codeCopyFunc(thisElement);
  }
}