import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/app.reducers';
import { HttpClientModule } from '@angular/common/http'; 
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/store/auth.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from './../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects]),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
