import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {SchemaDbAbstract} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProviderOneService implements SchemaDbAbstract {

  constructor() { }

  getData(): Observable<any> {
    return undefined;
  }

  initial(config): Observable<any> {
    return undefined;
  }
}
