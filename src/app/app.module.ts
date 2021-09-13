import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TelaDeLoginComponent } from './tela-de-login/tela-de-login.component';
import { TelaHomeComponent } from './tela-home/tela-home.component';


@NgModule({
  declarations: [
    AppComponent,
    TelaDeLoginComponent,
    TelaHomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
