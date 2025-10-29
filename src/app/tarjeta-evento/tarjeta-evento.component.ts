import { Component, Input, OnInit } from '@angular/core';
import { IonButton, IonCheckbox, IonItem, IonLabel } from '@ionic/angular/standalone';
import { PlantillaComponent } from '../plantilla/plantilla.component';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tarjeta-evento',
  templateUrl: './tarjeta-evento.component.html',
  styleUrls: ['./tarjeta-evento.component.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonCheckbox,
    IonItem,
    IonLabel,
    PlantillaComponent,
    NgIf,
    NgForOf,
    FormsModule,
    RouterModule,
    NgClass
  ]
})
export class TarjetaEventoComponent implements OnInit {
  @Input() titulo: string = '';
  @Input() imagen: string = '';
  @Input() info: { icono: string; etiqueta: string; valor: string }[] = [];
  @Input() mostrarCheckbox: boolean = false;
  @Input() mostrarBotones: boolean = false;
  @Input() esGratuito: boolean = false;

  recibirNotificaciones: boolean = false;
  registrado: boolean = false;
  interesado: boolean = false; //Estado del botón "Me interesa"

  ngOnInit() {
    this.registrado = false;
    this.interesado = false;
  }

  registrarEvento() {
    if (!this.registrado) {
      this.registrado = true;
    }
  }

  marcarInteres() {
    if (!this.interesado) {
      this.interesado = true;
    }
  }
}
