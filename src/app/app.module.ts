import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as fr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FaceSnapComponent } from './components/face-snap/face-snap.component';
import { FaceSnapListComponent } from './components/face-snap-list/face-snap-list.component';
import { SingleFaceSnapComponent } from './components/single-face-snap/single-face-snap.component';

import { HeaderComponent } from './modules/general/header/header.component';
import { HomeComponent } from './modules/general/home/home.component';

import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { FooterComponent } from './modules/general/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    FaceSnapListComponent,
    HeaderComponent,
    SingleFaceSnapComponent,
    HomeComponent,
    NotFoundComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
