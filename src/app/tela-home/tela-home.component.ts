import { Autenticacao } from './../interfaces/autenticacao';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-tela-home',
  templateUrl: './tela-home.component.html',
  styleUrls: ['./tela-home.component.css']
})
export class TelaHomeComponent implements OnInit {

  @Input() autenticacao: Autenticacao;

  constructor() { }



  ngOnInit(): void {
  }

  exibirModal($event){

    console.log($event);
  }

}
