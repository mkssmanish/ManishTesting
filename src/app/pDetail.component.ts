import { Component, Input,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProjectDetailServiceComponent } from './pDetail.service';
import {Post} from './post';
import {SelectionComponent} from './projectSelection.component';



@Component({
   selector: 'app-detail',
 
  templateUrl:'./html/projectDetail.html',

   styleUrls: ['./css/pDetail.component.css'],

      providers: [ProjectDetailServiceComponent]   

})//componrnt  closing

export class ProjectDetailComponent implements OnInit  {
   moduleChild:Post[];
  // moduleId:Post[];
moduleName:Post[];
    projectName:string;
 //moduleChild:any[]=[];
 indexvalue:number;

 message:string;
    show: boolean;
    mo:boolean;
    execute:boolean;
testExecution:boolean;
displayModule:boolean;
displayFeature:boolean;
displayImport:boolean;
//selectedModule:any;

    constructor(private router: Router,private route:ActivatedRoute,private module:ProjectDetailServiceComponent) {
    this.show = false;
    this.mo=false;
    this.execute=false;
 this.testExecution=false;
 this.displayModule=false;
 this.displayFeature=false;
 this.displayImport=false;
    }
 
 

      ngOnInit(){
//var index=0;

             let dataFromProjectSelectionDropdown=sessionStorage.getItem('key');
             this.projectName=dataFromProjectSelectionDropdown;
            this.module.projectDetails().subscribe(moduleData =>this.moduleName=moduleData);
  // this.module.childModuleDetails(index)
  //   .subscribe(moduleData =>{this.oduleChild=moduleData;console.log(this.oduleChild) });
  //     //console.log(this.moduleChild)
      }
 
   showDropDown:boolean;

manualtoggle(index){
 
//alert(index+"000")
 
 
this.module.childModuleDetails(index)
.subscribe(moduleData =>{this.moduleChild=moduleData;this.indexvalue=this.moduleChild[0].moduleId;console.log(this.moduleChild[0].moduleId);console.log(this.moduleChild) });
//alert(this.oduleChild.length)

// for (let i = 0; i <=this.moduleChild.length; i++) {
 
  //alert(typeof(this.oduleChild[i].featureName)+this.oduleChild[i].featureName)
  //console.log(this.moduleChild[i].moduleId)

  //this.indexvalue=this.moduleChild[i].moduleId;
  //this.showDropDown=!this.showDropDown;
  //alert(this.showDropDown)
  // this.moduleChild=this.oduleChild;
 //alert(typeof(this.oduleChild[i].moduleId)+this.oduleChild[i].moduleId)
 //var i=0;
 //this.indexvalue=this.moduleChild[i].moduleId
 
 //alert(this.indexvalue)

  // }
//  if(index==this.indexvalue){
   
  
// //console.log(this.moduleChild.featureName)
//   }

}

  



 
        changeShowStatus(){
//alert( this.show)
           this.show = true;
           this.testExecution=false;
           this.mo=false;
           this.execute=false; 
 
        }
    
        showTestExecution(){
//alert("2")
   this.show = false;
   this.testExecution=true;
   this.mo=false;
   this.execute=false;
        }

        goCreateModule(){
          //var displayModule:string
          this.displayModule=true;
          this.displayFeature=false;
          this.displayImport=false;
          //alert("yy")
          //this.router.navigate(['CreateModule'],{relativeTo:this.route})
        }
           goCreateFeature(){
          this.displayFeature=true;
          this.displayModule=false;
          this.displayImport=false;
        }
       goImport(){
         //alert("1st")
          this.displayImport=true;
          this.displayModule=false;
          this.displayFeature=false;
        }

        mobile(){
          this.mo=true;
          this.execute=false;
          this.show=false;

        }

        execution(){
          this.execute=true;
          this.mo=false;
          this.show=false;
        }

}
