import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map,tap, first, flatMap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class UserServiceService {
  url : string = 'https://api.github.com/users?since=135';
  result : any;
  constructor(private httpClient : HttpClient) {
  }

  getAllusers() {
   return this.httpClient.get<any>(this.url).
    subscribe(
      (data: any) => this.result = {...data}
    );
  }

  log(text: string){
    console.log(text)
  }
}