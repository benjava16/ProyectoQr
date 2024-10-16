import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit{
  diccionario = {
    user:"",
    password:""
  }
  constructor(private aRoute:ActivatedRoute) {}


  ngOnInit() {
    this.aRoute.queryParams.subscribe(params => {
      this.diccionario.user = params['data1']
      this.diccionario.password = params['data2']
    });
  }//fin ngOnInit

}
