import { LoginService } from './services/login.service';
import { Component } from '@angular/core';
import { Autenticacao } from './interfaces/autenticacao';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'billingreport-frontend';

  constructor(private _login: LoginService){

  }

  autenticacao: Autenticacao;

  logar($event){
    console.log($event);
    this._login.autenticacaoDeUsuario($event);
  }

}
