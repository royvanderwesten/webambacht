import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import {AngularFireAuthGuard} from "@angular/fire/compat/auth-guard";
import {redirectLoggedInTo, redirectUnauthorizedTo} from "@angular/fire/compat/auth-guard";
import {HomepageComponent} from "./pages/homepage/homepage.component";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHomepage = () => redirectLoggedInTo(['']);

export const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToHomepage }
  },
  {
    path: '',
    component: HomepageComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }
