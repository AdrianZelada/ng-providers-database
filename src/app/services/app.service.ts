import { Injectable } from '@angular/core';
import { SchemaDbAbstract} from '../abstracts/database-connect.abstract';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService implements SchemaDbAbstract {

  constructor() { }

  getData(): Observable<any> {
    return undefined;
  }

  initial(config): Observable<any> {
    return undefined;
  }
}
