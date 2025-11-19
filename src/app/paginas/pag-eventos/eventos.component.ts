import { Component, OnInit } from '@angular/core';
import {PlantillaComponent} from "../plantilla/plantilla.component";
import {RouterLink} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {EventoService} from "../../servicios/evento.service";


@Component({
  selector: 'app-pag-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
  standalone: true,
  imports: [PlantillaComponent, RouterLink, NgForOf, NgIf]
})

export class EventosComponent  implements OnInit {

  eventos: any[] = [];

  constructor(private eventoService: EventoService) { }

  ngOnInit() {
    this.eventoService.obtenerEventos().subscribe({
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
