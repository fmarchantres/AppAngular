import { Component, OnInit } from '@angular/core';
import {PlantillaComponent} from "../plantilla/plantilla.component";
import {RouterLink} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {EventoService} from "../../servicios/evento.service";
import {Evento} from "../../modelos/evento.model";


@Component({
  selector: 'app-pag-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
  standalone: true,
  imports: [PlantillaComponent, RouterLink, NgForOf, NgIf]
})

export class EventosComponent  implements OnInit {

  eventos: Evento[] = [];

  constructor(private eventoService: EventoService) { }


  ngOnInit(){
    this.cargarEventos();
  }

  ionViewWillEnter(){
    this.cargarEventos();
  }



  cargarEventos() {
    this.eventoService.getEventos().subscribe({
      next:(data) => {
        this.eventos = data;
        console.log("EVENTOS RECIBIDOS:",data);
      },
      error: (err) => {
        console.log("ERROR AL CARGAR EVENTOS",err);
      }
    })
  }
}
