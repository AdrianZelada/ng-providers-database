import { Injectable } from '@angular/core';
import {ModelsDbParent} from '../abstracts/database-connect.abstract';
import {AppService} from './app.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ModelsDbParent {

  constructor(public appService: AppService) {
    super(appService);
  }
}
