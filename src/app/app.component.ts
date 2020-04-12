import { Component } from '@angular/core';
import {UserServiceService} from './user-service.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  result : any;
  constructor(private userService : UserServiceService){
  }

  // getAllUsers(){
  //   this.result = this.userService.getAllusers().subscribe(
  //     (data: any) => this.result = {...data}
  //   );
  //   console.table(this.result);
  // }

  getAllUsers(){
    this.result = this.userService.getAllusers().subscribe(
      (data: any) => this.result = {...data}
    );
    console.table(this.result);
  }

}
