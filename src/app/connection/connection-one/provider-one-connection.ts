import {DatabaseConnectAbstract} from '../../interfaces';
import {BehaviorSubject, Observable} from 'rxjs';
import {InjectionToken} from '@angular/core';
export const DATACONNECT_ONE = new InjectionToken<DatabaseConnectAbstract>('database connect');

export class ProviderOneConnection implements DatabaseConnectAbstract {
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
      console.log('connection one');
      this.init.next(true);
    }, 5000);
  }
}

export function providerOneConnectionFactory() {
  return new ProviderOneConnection();
}
