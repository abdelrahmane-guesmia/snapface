import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FaceSnapListComponent } from './modules/application/face-snap-list/face-snap-list.component';
import { SingleFaceSnapComponent } from './modules/application/single-face-snap/single-face-snap.component';
import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'contact',
    title: 'Contact',
    loadChildren: () =>
      import('./modules/general/contact/contact.module').then(
        (mod) => mod.ContactModule
      ),
  },
  {
    path: 'about',
    title: 'About',
    loadChildren: () =>
      import('./modules/general/about/about.module').then(
        (mod) => mod.AboutModule
      ),
  },
  {
    path: 'login',
    title: 'Login',
    loadChildren: () =>
      import('./modules/general/login/login.module').then(
        (mod) => mod.LoginModule
      ),
  },
  {
    path: 'signup',
    title: 'Signup',
    loadChildren: () =>
      import('./modules/general/signup/signup.module').then(
        (mod) => mod.SignupModule
      ),
  },
  {
    path: 'facesnap-form',
    title: 'Form',
    loadChildren: () =>
      import('./modules/application/face-snap-form/face-snap-form.module').then(
        (mod) => mod.FaceSnapFormModule
      ),
  },
  {
    path: 'chartjs',
    title: 'Chart',
    loadChildren: () =>
      import('./modules/application/chartjs/chartjs.module').then(
        (mod) => mod.ChartjsModule
      ),
  },
  { path: 'facesnaps', title: 'Facesnap', component: FaceSnapListComponent },
  {
    path: 'facesnaps/:id',
    title: 'Facesnap',
    component: SingleFaceSnapComponent,
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
