import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import {AngularFireAuthGuard} from "@angular/fire/compat/auth-guard";
import {redirectLoggedInTo, redirectUnauthorizedTo} from "@angular/fire/compat/auth-guard";
import {PageBuilderComponent} from "./blocks/page-builder/page-builder.component";
import {PageBuilderConfiguratorComponent} from "./blocks/page-builder-configurator/page-builder-configurator.component";
import {PageBuilderViewComponent} from "./blocks/page-builder-view/page-builder-view.component";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHomepage = () => redirectLoggedInTo(['']);

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'configure',
    pathMatch: 'full'
  },
  {
    path: 'configure',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    component: PageBuilderComponent,
    children: [
      {
        path: ':pageId',
        component: PageBuilderViewComponent
      },
    ],
  },
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToHomepage }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }
