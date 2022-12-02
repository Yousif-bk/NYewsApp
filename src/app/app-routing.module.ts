import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignComponent } from './components/auth/sign/sign.Component';
import { ContentLayoutComponent } from './shared/components/content-layout/content-layout.component';
import { AuthGuard } from './shared/helper/guards/auth/auth.guard';
import { UnauthGuard } from './shared/helper/guards/auth/unauth.guard';
import { AppRoutes } from './shared/models/AppRoutes';
import { content } from './shared/routes/content-routes';

const routes: Routes = [
  {
    path: AppRoutes.Auth.sign.full,
    component: SignComponent,
    pathMatch: 'full',
    canActivate: [UnauthGuard]
  },
  {
    path: '',
    redirectTo: AppRoutes.news.full,
    pathMatch: 'full',
  },
  {
    path: '',
    component: ContentLayoutComponent,
    children: content,
    canActivate: [AuthGuard]
  },
   {
      path: "**",
      redirectTo: AppRoutes.news.full,
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
