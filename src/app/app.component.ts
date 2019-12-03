import { Component } from '@angular/core';
import {AppService} from './services/app.service';
import {CountryService} from './services/country.service';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'providers-extend';
  constructor(private appService: CountryService, private userService: UserService){
    console.log('run app');
    this.appService.getData().subscribe((data) => {
      console.log("this.appService");
      console.log(data);
    });

    this.userService.getData().subscribe((data) => {
      console.log("this.userService");
      console.log(data);
      this.getUsers();
    });


  }

  getUsers() {
    this.userService.getData().subscribe((data) => {
      console.log("this.userService 222222");
      console.log(data);
    });
  }
}
