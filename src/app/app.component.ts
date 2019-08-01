import { Component } from '@angular/core';
import { userapi } from './services/userapi';
import {comments} from './classes/comments';
import { postclass } from './classes/postclass';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'apicallAngular';

  constructor(private apiservice:userapi){}

  lstcomments:comments[];
  opost=new postclass();
  objpost:postclass;


    

  ngOnInit(){
        this.apiservice.getcomments().subscribe(
          data=>{
                this.lstcomments = data;
          }
        );
      
        // this.opost.id=1;
        this.opost.job="testjob";
        // this.opost.createdAt="testcreateAt";
        this.opost.name="testname";
        console.log("opost",this.opost);

        this.apiservice.post(this.opost).subscribe(
          data=>{
            console.log("jsondata",data);
              this.objpost=data;

          }
        );

        console.log("name",this.objpost);       
  }
  




}


