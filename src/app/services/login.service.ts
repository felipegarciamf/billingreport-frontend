import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Autenticacao } from '../interfaces/autenticacao';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }

  private usuarioLogado : Usuario;

  private _url: string = "http://localhost:8080/autenticacao";

  autenticacao(auth: Autenticacao){
    return this._http.post<Usuario>(this._url, {
      email: auth.email,
      password: auth.password
    }).do((usuario: Usuario) => this.usuarioLogado = usuario);

  }





}
