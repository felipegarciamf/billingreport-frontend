import { TelaHomeComponent } from './tela-home/tela-home.component';
import { TelaDeLoginComponent } from './tela-de-login/tela-de-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: TelaDeLoginComponent },
  { path: 'home', component: TelaHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
