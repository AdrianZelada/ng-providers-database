import {BehaviorSubject, Observable} from 'rxjs';

export interface DatabaseConnectAbstract {
  init: BehaviorSubject<any>;
  init$: Observable<any>;
  connect(config);
}

export interface MethodsAbstract {
  getData(): Observable<any>;
}

export interface SchemaDbAbstract extends MethodsAbstract{
  initial(config): Observable<any>;
}
