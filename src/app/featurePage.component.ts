import { Component ,OnInit} from '@angular/core';
import{FeatureServiceComponent} from './featurePage.service'
import {ProjectDetailServiceComponent} from './pDetail.service';
import {Post} from './post';
@Component({
   selector: 'app-feature',
 
  templateUrl:'./html/featurePage.component.html',

providers: [ProjectDetailServiceComponent]
   //styleUrls: ['./pDetail.component.css'],

       

})//componrnt  closing

export class FeatureComponent implements OnInit   {
  moduleDatas:Post[]; 
    featureName:string;
  

    constructor(private sendFeatureName:FeatureServiceComponent,private data:ProjectDetailServiceComponent) {
  //alert("jjj")
  
 
    }
 
 
      ngOnInit(){
  	

          this.data.projectDetails()
          .subscribe(Data => this.moduleDatas=Data, error => console.log(error));

          //console.log(this.datas)

          // this.datas=this.projectSelectionData;



      }

   saveFeatureName(){
//alert(this.moduleName)
this.sendFeatureName.featureServiceDetails(this.featureName)

   }  


}
