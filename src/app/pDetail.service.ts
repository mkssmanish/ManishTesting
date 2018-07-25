import { Injectable } from '@angular/core';

import { Http,Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { URLSearchParams } from '@angular/http';

import {Post} from './post';
@Injectable()
export class ProjectDetailServiceComponent {


 constructor(private http: Http) {

 }
// response:any
   projectDetails(): Observable<Post[]>{
// alert("ll00")
   return this.http.get("/getModuleName")
  .map((response: Response) => <Post[]>response.json());

  }

    childModuleDetails(index): Observable<Post[]> {

// alert(typeof(index)+index)
//  	 let params = new URLSearchParams();
// params.set('selectedModule', 'selectedModule');

   return this.http.get('/getFeatureName' + index)
   .map((response: Response) => <Post[]>response.json());
   // console.log(response.json())

  }

  childModuleDetails1(): Observable<Post[]> {

    // alert(typeof(index)+index)
    //  	 let params = new URLSearchParams();
    // params.set('selectedModule', 'selectedModule');

       return this.http.get('/featureName')
       .map((response: Response) => <Post[]>response.json());
       // console.log(response.json())
      }


  // response:any
   typeDetails(): Observable<Post[]> {
    // alert("ll00")
       return this.http.get("/importType")
      .map((response: Response) => <Post[]>response.json());

      }

      priorityDetails(): Observable<Post[]> {
        // alert("ll00")
           return this.http.get("/importPriority")
          .map((response: Response) => <Post[]>response.json());

          }






}
