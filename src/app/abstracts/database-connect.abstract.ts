import {BehaviorSubject, Observable, of} from 'rxjs';
import {filter, switchMap, take} from 'rxjs/operators';
import {InjectionToken} from '@angular/core';

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

export const DATACONNECT = new InjectionToken<DatabaseConnectAbstract>('database connect');

export const SCHEMA = new InjectionToken<SchemaDbAbstract>('schema');

export class DatabaseConnect implements DatabaseConnectAbstract {
  public database: any;
  public init: BehaviorSubject<any> = new BehaviorSubject(false);
  public init$: Observable<any> = this.init.asObservable();
  constructor() {
    setTimeout(() => {
      this.connect({});
    });
  }

  connect(config) {
    setTimeout(() => {
      this.database = {
        status: true
      };
      this.init.next(true);
    }, 5000);
  }
}

export function connectDB() {
  return new DatabaseConnect();
}

export class ModelsDbParent implements MethodsAbstract {
  constructor(public service: SchemaDbAbstract) {}

  getData(): Observable<any> {
    console.log("get DAta data");
    return this.service.getData().pipe(
      take(1)
    );
  }

}

export class AppDbService implements SchemaDbAbstract {

  public init: BehaviorSubject<any> = new BehaviorSubject(false);
  public init$: Observable<any> = this.init.asObservable();
  private initializeDb: boolean = false;
  constructor(public dbConnect: DatabaseConnectAbstract) {
    this.init$ = this.initial({});
  }

  getData(): Observable<any> {
    return this.init$.pipe(
      filter(status => status),
      switchMap(() => {
        return of({
          status: true,
          now: Date.now()
        });
      })
    );
  }

  initial(config): Observable<any> {
    return this.dbConnect.init$.pipe(
      filter(status => status),
      switchMap(() => {
        if (this.initializeDb) {
          return of(true);
        } else {
          return new Observable((observer) => {
            setTimeout(() => {
              this.initializeDb = true;
              observer.next(true);
              observer.complete();
            }, 2000);
          });
        }
      })
    );
  }
}
export function appfactoryDB(connection: DatabaseConnectAbstract) {
  return new AppDbService(connection);
}


