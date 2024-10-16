import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {

  constructor(private animationCtrl: AnimationController) { }

  ngOnInit(){
    
  }
  
  ngAfterViewInit() {
    this.zoomInCard();
  }

  


  zoomInCard() {
    const element = document.querySelector('ion-card'); // Selecciona el ion-card para aplicar la animación

    if (element) { // Verifica que el elemento exista
      const animation = this.animationCtrl.create()
        .addElement(element)
        .duration(800) // Duración de la animación en milisegundos
        .easing('ease-in') // Tipo de aceleración
        .fromTo('transform', 'scale(0.5)', 'scale(1)'); // Escalado desde 0.5x a 1x

      animation.play(); // Inicia la animación
    } else {
      console.error('ion-card no encontrado en el DOM');
    }
  }

}

