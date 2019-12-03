import { Injectable } from '@angular/core';
import {AppService} from './app.service';
import {ModelsDbParent} from '../abstracts/database-connect.abstract';

@Injectable({
  providedIn: 'root'
})
export class CountryService extends ModelsDbParent {

  constructor(public appService: AppService) {
    super(appService);
  }


}
