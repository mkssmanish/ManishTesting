import { Component} from '@angular/core';
import{ModuleServiceComponent} from './modulePage.service'

@Component({
    selector: 'app-module',
 
  templateUrl:'./html/modulePage.component.html',


   //styleUrls: ['./pDetail.component.css'],

       

})//componrnt  closing

export class ModuleComponent   {
 
    moduleName:string;
  

    constructor(private sendModuleName:ModuleServiceComponent) {
  //alert("jjj")
  
 
    }
 
 

   saveModuleName(){
//alert(this.moduleName)
this.sendModuleName.moduleServiceDetails(this.moduleName)

   }  


}
