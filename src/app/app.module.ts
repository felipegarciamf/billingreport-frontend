import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TelaDeLoginComponent } from './tela-de-login/tela-de-login.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaDeLoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
