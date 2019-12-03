import { BrowserModule } from '@angular/platform-browser';
import {InjectionToken, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {DATACONNECT_ONE, ProviderOneConnection, providerOneConnectionFactory} from './connection/connection-one/provider-one-connection';
import { providerOneFactory} from './connection/connection-one/provider-one';
import {ProviderOneService} from './services/provider-one.service';
import {ProviderTwoService} from './services/provider-two.service';
import {DATACONNECT_TWO, providerTwoFactory} from './connection/connection-two/provider-two';
import {ProviderTwoConnection, providerTwoConnectionFactory} from './connection/connection-two/provider-two-connection';
import {DatabaseConnectAbstract} from './interfaces';
import {environment} from '../environments/environment';
import {AppService} from './services/app.service';
import {providerAppFactory} from './services/app-provider';

export const DATACONNECT = new InjectionToken<DatabaseConnectAbstract>('database connect 222 2');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    // {
    //   provide: DATACONNECT_ONE,
    //   useFactory: providerOneConnectionFactory
    // },
    // {
    //   provide: ProviderOneService,
    //   useFactory: providerOneFactory,
    //   deps: [DATACONNECT_ONE]
    // },
    // {
    //   provide: DATACONNECT_TWO,
    //   useFactory: providerTwoConnectionFactory
    // },
    // {
    //   provide: ProviderTwoService,
    //   useFactory: providerTwoFactory,
    //   deps: [DATACONNECT_TWO]
    // }
    {
      provide: DATACONNECT,
      useFactory: function() {
        if (environment.production) {
          return new ProviderOneConnection();
        } else {
          return new ProviderTwoConnection();
        }
      }
    },
    {
      provide: AppService,
      useFactory: providerAppFactory,
      deps: [DATACONNECT]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
