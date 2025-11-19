import { Component, OnInit } from '@angular/core';
import {PlantillaComponent} from "../plantilla/plantilla.component";
import {TarjetaEventoComponent} from "../tarjeta-evento/tarjeta-evento.component";
import {NgIf} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {EventoService} from "../../servicios/evento.service";

@Component({
  selector: 'app-evento-creado-usuario',
  templateUrl: './evento-creado-usuario.component.html',
  styleUrls: ['./evento-creado-usuario.component.scss'],
  standalone: true,
  imports: [
    PlantillaComponent,
    TarjetaEventoComponent,
    NgIf
  ]
})
export class EventoCreadoUsuarioComponent implements OnInit {
  id!: number;
  evento: any = null; //aqui se guardará el evento recibido

  constructor(
    private route: ActivatedRoute,
    private eventoService: EventoService
  ) {}

  ngOnInit() {

    //OBTENER EL ID DE LA URL
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    //LLAMAR AL SERVICIO
    this.eventoService.obtenerEventoPorId(this.id).subscribe({
      next: (data) => {
        this.evento = data;
        console.log("EVENTO CARGADO", data);
      },
      error: (err) => {
        console.log("Error al cargar el evento", err);
      }
    });
  }

}
