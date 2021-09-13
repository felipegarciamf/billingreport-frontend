
import { Autenticacao } from './../interfaces/autenticacao';
import { Component, OnInit } from '@angular/core';

import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-tela-de-login',
  templateUrl: './tela-de-login.component.html',
  styleUrls: ['./tela-de-login.component.scss'],
})
export class TelaDeLoginComponent implements OnInit {


  constructor(private _loginService: LoginService
  ) {

  }

  auth: Autenticacao = {
    email: "teste",
    password: ""
  };

  ngOnInit(): void {

  }

  cadastro() {

  }


  logar() {

    let mensagem = "";

    console.log(this.auth);
    this._loginService.autenticacao(this.auth).subscribe(
      (auth) => {
        mensagem = "Seja bem vindo: " + auth.nome;
      },
      (err) => {
        mensagem = err;
      }
    );

    console.log(mensagem);


  }


}
