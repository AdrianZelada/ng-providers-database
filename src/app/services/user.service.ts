import { Injectable } from '@angular/core';
import {ModelsDbParent} from '../abstracts/database-connect.abstract';
import {ProviderTwoService} from './provider-two.service';
import {ProviderOneService} from './provider-one.service';
import {AppService} from './app.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ModelsDbParent {

  // constructor(public appService: ProviderTwoService) {
  // constructor(public appService: ProviderOneService) {
  constructor(public appService: AppService) {
    super(appService);
  }
}
