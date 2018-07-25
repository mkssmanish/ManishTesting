

import { Component, OnInit} from '@angular/core';


import { ProjectDetailServiceComponent  } from './pDetail.service';
@Component({
selector: 'app-test',

templateUrl:  './html/testExecution.html',
  styleUrls: ['./css/testExecution.css'],
  providers : [ ProjectDetailServiceComponent ]


       }) // componrnt  closing

export class TestExecutionComponent implements OnInit  {
       moduleNames = [] ;
       featureNames = [];
       typeArray = [];
       priorityArray = [];
       demoArrayaData: String = "";



  constructor( private data: ProjectDetailServiceComponent) {

  }
  ngOnInit() {
    this.data.projectDetails().subscribe(Data => this.moduleNames = Data) ;
    this.data.childModuleDetails1().subscribe(Data => this.featureNames = Data ) ;
    this.data.typeDetails().subscribe(Data => this.typeArray = Data) ;
    this.data.priorityDetails().subscribe(Data => this.priorityArray = Data) ;
    this.demoArrayaData = this.moduleNames[1];

  }





}
