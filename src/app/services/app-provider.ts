import {DatabaseConnectAbstract, SchemaDbAbstract} from '../interfaces';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {filter, switchMap} from 'rxjs/operators';

export class AppProvider implements SchemaDbAbstract {

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
export function providerAppFactory(connection: DatabaseConnectAbstract) {
  return new AppProvider(connection);
}
