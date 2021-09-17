
import { Autenticacao } from './../interfaces/autenticacao';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tela-de-login',
  templateUrl: './tela-de-login.component.html',
  styleUrls: ['./tela-de-login.component.scss'],
})
export class TelaDeLoginComponent implements OnInit {


  @Output() aoLogar = new EventEmitter<any>();
  @Output() valoresComErro = new EventEmitter<string>();

  constructor(private _loginService: LoginService,
              private router: Router
  ) {

  }

  auth: Autenticacao = {
    email: "teste",
    password: "teste"
  };

  ngOnInit(): void {

  }

  cadastro() {

  }


  logar() {
    let mensagem = "";
    if (this.dadosValidos())
      this._loginService.autenticacaoDeUsuario(this.auth).subscribe(
        (auth) => {
          mensagem = "Seja bem vindo: " + auth.nome;
          this.router.navigateByUrl("home");
        },
        (err) => {
          this.router.navigateByUrl("home");
          mensagem = err;
          console.log(mensagem);

        }
      );

    const valorLogar = {
      email: this.auth.email,
      password: this.auth.password
    }
    this.aoLogar.emit(valorLogar);


  }
  dadosValidos(): boolean {
    if (this.auth.email != "" && this.auth.password != "") {
      return true;
    }
    this.valoresComErro.emit('Informe um valor válido');
    return false;
  }


}
