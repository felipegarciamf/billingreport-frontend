import { Component } from '@angular/core';
import { Autenticacao } from './interfaces/autenticacao';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'billingreport-frontend';

  autenticacao: Autenticacao;

  logar($event){
    console.log($event);
    this.autenticacao = $event;
  }

}
