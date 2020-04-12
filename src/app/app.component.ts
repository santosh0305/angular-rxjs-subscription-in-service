import { Component } from '@angular/core';
import {UserServiceService} from './user-service.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  result : any;
  constructor(private userService : UserServiceService){
  }

  getAllUsers(){
    this.userService.getAllusers()
  }
}
