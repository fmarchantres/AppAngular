import { Component } from '@angular/core';
import { PlantillaComponent } from '../plantilla/plantilla.component';
import { IonButton, IonIcon, IonModal, IonAlert } from '@ionic/angular/standalone';
import { Router, RouterLink } from "@angular/router";
import { NgForOf } from "@angular/common";

import { Evento } from "../../modelos/evento.model";
import { EventoService } from "../../servicios/evento.service";
import { UsuarioService } from "../../servicios/usuario.service";
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-pag-perfil',
  templateUrl: './pag-perfil.component.html',
  styleUrls: ['./pag-perfil.component.scss'],
  standalone: true,
  imports: [
    PlantillaComponent,
    IonButton,
    RouterLink,
    IonModal,
    IonIcon,
    NgForOf,
    IonAlert
  ],
})
export class PagPerfilComponent {

  mostrarDetalles = false;
  mostrarConfirmacion = false;

  eventosDestacados: Evento[] = [];

  alertButtons = [
    {
      text: 'Cancelar',
      role: 'cancel'
    },
    {
      text: 'Eliminar',
      role: 'destructive'
    }
  ];


  constructor(
    private router: Router,
    private eventoService: EventoService,
    private usuarioService: UsuarioService,
    private navCtrl: NavController

  ) {}

  ngOnInit() {
    this.eventoService.getEventosDestacados()
      .subscribe({
        next: eventos => this.eventosDestacados = eventos,
        error: err => console.error(err)
      });
  }

  detallesEvento = {
    titulo: "Torneo Deportivo",
    hora: "9:00 am – 1:00 pm",
    lugar: "Canchas de la preparatoria",
    descripcion: "Competencia entre equipos de fútbol, voleibol y baloncesto para toda la comunidad estudiantil.",
    requisitos: "Inscripción de equipos antes del 12 de octubre.",
    asistentes: "119 usuarios registrados.",
    precio: "Gratuito"
  };

  cerrarSesion() {
    localStorage.clear();
    this.router.navigate(['pag-login']);
  }

  eliminarCuenta() {
    this.mostrarConfirmacion = true;
  }

  confirmarEliminacion() {
    const usuario = JSON.parse(localStorage.getItem('usuario')!);
    const idUsuario = usuario.id;

    this.usuarioService.eliminarUsuario(idUsuario)
      .subscribe({
        next: () => {
          localStorage.clear();

          window.location.href = '/pag-registro';
        },
        error: err => console.error(err)
      });
  }




  onAlertDismiss(event: any) {
    if (event.detail.role === 'destructive') {
      setTimeout(() => {
        this.confirmarEliminacion();
      }, 0);
    }
  }



}
