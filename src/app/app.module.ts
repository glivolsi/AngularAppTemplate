import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { WelcomeComponent } from './features/welcome/welcome.component';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
