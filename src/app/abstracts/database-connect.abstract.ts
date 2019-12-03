import {BehaviorSubject, Observable, of} from 'rxjs';
import {filter, switchMap, take} from 'rxjs/operators';
import {InjectionToken} from '@angular/core';
import {DatabaseConnectAbstract, MethodsAbstract, SchemaDbAbstract} from '../interfaces';



export class ModelsDbParent implements MethodsAbstract {
  constructor(public service: SchemaDbAbstract) {}

  getData(): Observable<any> {
    return this.service.getData().pipe(
      take(1)
    );
  }

}

