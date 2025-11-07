import { Component } from '@angular/core';
import { PlantillaComponent } from '../plantilla/plantilla.component';
import {IonButton, IonIcon, IonModal} from '@ionic/angular/standalone';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-pag-perfil',
  templateUrl: './pag-perfil.component.html',
  styleUrls: ['./pag-perfil.component.scss'],
  standalone: true,
  imports: [PlantillaComponent, IonButton, RouterLink, IonModal, IonIcon],
})
export class PagPerfilComponent {
  mostrarDetalles:boolean = false;

  detallesEvento = {
    titulo: "Torneo Deportivo",
    hora: "9:00 am – 1:00 pm",
    lugar: "Canchas de la preparatoria",
    descripcion: "Competencia entre equipos de fútbol, voleibol y baloncesto para toda la comunidad estudiantil.",
    requisitos: "Inscripción de equipos antes del 12 de octubre.",
    asistentes: "119 usuarios registrados.",
    precio: "Gratuito"
  };

}
