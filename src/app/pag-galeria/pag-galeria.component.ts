import { Component } from '@angular/core';
import { PlantillaComponent } from "../plantilla/plantilla.component";
import { IonGrid, IonRow, IonCol, IonModal, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-pag-galeria',
  templateUrl: './pag-galeria.component.html',
  styleUrls: ['./pag-galeria.component.scss'],
  standalone: true,
  imports: [
    PlantillaComponent,
    IonGrid,
    IonRow,
    IonCol,
    IonModal,
    IonButton,
    CommonModule,
    RouterLink
  ]
})
export class PagGaleriaComponent {

  fotos: string[] = [
    'assets/fotos/foto1.jpg',
    'assets/fotos/foto2.jpg',
    'assets/fotos/foto3.jpg',
    'assets/fotos/foto4.jpg',
    'assets/fotos/foto5.jpg',
    'assets/fotos/foto6.jpg',
    'assets/fotos/foto7.jpg',
    'assets/fotos/foto8.jpg'
  ];

  mostrarModal: boolean = false;
  indexActual: number = 0;
  fotoSeleccionada: string = '';

  abrirFoto(index: number) {
    this.indexActual = index;
    this.fotoSeleccionada = this.fotos[index];
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

  fotoAnterior() {
    if (this.indexActual > 0) {
      this.indexActual--;
      this.fotoSeleccionada = this.fotos[this.indexActual];
    }
  }

  fotoSiguiente() {
    if (this.indexActual < this.fotos.length - 1) {
      this.indexActual++;
      this.fotoSeleccionada = this.fotos[this.indexActual];
    }
  }

}
