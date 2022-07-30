import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { UsersComponent } from './user/users/users.component';
import { UsersComponent as UsersContainerComponent } from './containers/users/users.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { ConfigComponent } from './containers/config/config.component';
import { UserService } from './user/user.service';
import { appReducers } from './+state/app.reducer';
import { UserEffects } from './+state/user.effects';
import { ConfigEffects } from './+state/config.effects';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './containers/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersContainerComponent,
    UserDetailsComponent,
    ConfigComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects, ConfigEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
