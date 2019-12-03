import {DatabaseConnectAbstract} from '../../interfaces';
import {BehaviorSubject, Observable} from 'rxjs';

export class ProviderTwoConnection implements DatabaseConnectAbstract {
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
      console.log('connection two');
      this.init.next(true);
    }, 2000);
  }
}

export function providerTwoConnectionFactory() {
  return new ProviderTwoConnection();
}
