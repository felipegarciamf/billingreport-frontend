import { LoginService } from './../services/login.service';
import { Autenticacao } from './../interfaces/autenticacao';
import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/usuario';


@Component({
  selector: 'app-tela-home',
  templateUrl: './tela-home.component.html',
  styleUrls: ['./tela-home.component.css']
})
export class TelaHomeComponent implements OnInit {


  autenticacao: Autenticacao;

  constructor(private loginService: LoginService) {
   }



  ngOnInit(): void {
    debugger
    this.autenticacao = this.loginService.usuarioLogado;
    console.log(this.autenticacao);
  }

  exibirModal($event){
    console.log($event);
  }

  atualizar(){
    this.autenticacao = this.loginService.usuarioLogado;
  }

}
