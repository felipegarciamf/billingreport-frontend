import { Component, OnInit } from '@angular/core';
import { Autenticacao } from '../interfaces/autenticacao';
import { Usuario } from '../interfaces/usuario';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-tela-de-login',
  templateUrl: './tela-de-login.component.html',
  styleUrls: ['./tela-de-login.component.scss'],
})
export class TelaDeLoginComponent implements OnInit {


  constructor(private _loginService : LoginService
              ) {

   }

  ngOnInit(): void {

  }

  cadastro(){

  }


  logar(auth : Autenticacao){
    let mensagem = "";
    this._loginService.autenticacao(auth).subscribe(
      (auth) => {
        mensagem = "Seja bem vindo: " + auth.nome;
      },
      (err) => {
        mensagem = "Usuário não encontrado";
      }
    );

    console.log(mensagem);


  }


}
