import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {  NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
  alertButtons = ['Aceptar']
  //atributos
  data={
  user:'',
  password:'',
  email: '',
  }
  constructor(private nCtrl:NavController) {}
  //inicio método enviarInicio
  enviarInicio(){
    let nExtras:NavigationExtras = {
      queryParams:{
        data1: this.data.user,
        data2: this.data.password
      }
    };
    this.nCtrl.navigateForward(['/inicio'],nExtras);
  }//fin método enviarInicio

  ngOnInit() {
  }


}
