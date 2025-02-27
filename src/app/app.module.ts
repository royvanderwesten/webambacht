import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {reducers} from "./store/reducers";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {HomepageComponent} from "./pages/homepage/homepage.component";
import { DefaultHeaderComponent } from './layout/default-header/default-header.component';
import { DefaultFooterComponent } from './layout/default-footer/default-footer.component';
import { DefaultMainComponent } from './layout/default-main/default-main.component';
import { DefaultNavComponent } from './blocks/default-nav/default-nav.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { AccountDropdownComponent } from './components/account-dropdown/account-dropdown.component';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';

import { initializeApp } from "firebase/app";
import { AppRoutingModule } from './app-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {ReactiveFormsModule} from "@angular/forms";

import { getAuth } from "firebase/auth";
import {AngularFireAuthGuard} from "@angular/fire/compat/auth-guard";
import {provideFirebaseApp} from "@angular/fire/app";
import {provideAuth} from "@angular/fire/auth";
import {AngularFireModule} from "@angular/fire/compat";

const firebaseConfig = {
  apiKey: "AIzaSyDonoOIsH_MnxdhNBWbpCrT25llWwXCYGs",
  authDomain: "webambacht.firebaseapp.com",
  projectId: "webambacht",
  storageBucket: "webambacht.appspot.com",
  messagingSenderId: "131229271588",
  appId: "1:131229271588:web:bf6be3931a264fa7eebab1"
};

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DefaultHeaderComponent,
    DefaultFooterComponent,
    DefaultMainComponent,
    DefaultNavComponent,
    SearchBarComponent,
    AccountDropdownComponent,
    MainNavigationComponent,
    LoginPageComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
  ],
  providers: [AngularFireAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
