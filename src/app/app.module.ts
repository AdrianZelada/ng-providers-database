import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {appfactoryDB, connectDB, DatabaseConnect, DATACONNECT} from './abstracts/database-connect.abstract';
import {AppService} from './services/app.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: DATACONNECT,
      useFactory: connectDB
    },
    {
      provide: AppService,
      useFactory: appfactoryDB,
      deps: [DATACONNECT]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
