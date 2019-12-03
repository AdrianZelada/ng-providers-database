import { Injectable } from '@angular/core';

import {ModelsDbParent} from '../abstracts/database-connect.abstract';
import {ProviderOneService} from './provider-one.service';
import {AppService} from './app.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService extends ModelsDbParent {

  // constructor(public appService: ProviderOneService) {
  constructor(public appService: AppService) {
    super(appService);
  }


}
