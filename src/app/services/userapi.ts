import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { postclass } from '../classes/postclass';

@Injectable()
export class userapi {

     constructor(private httpclient:HttpClient){
        }

    getcomments():Observable<any>{
             return this.httpclient.get("https://jsonplaceholder.typicode.com/todos");
    }

    post(opost:postclass):Observable<any>{
        console.log("opost in userapi",opost);
        return this.httpclient.post("https://jsonplaceholder.typicode.com/todos",opost);
    }

}
