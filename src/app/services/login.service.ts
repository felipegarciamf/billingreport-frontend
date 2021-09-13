import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Autenticacao } from '../interfaces/autenticacao';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }

  private usuarioLogado : Usuario;

  private _url: string = "http://localhost:8080/autenticacao";

  _httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };


  public autenticacao(auth: Autenticacao){
    return this._http.post<Usuario>(this._url, auth, this._httpOptions);
  }





}
