import { Component, OnInit } from '@angular/core';
import {Evento} from "../../modelos/evento.model";
import {ActivatedRoute, Router} from "@angular/router";
import {EventoService} from "../../servicios/evento.service";
import {FormsModule} from "@angular/forms";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonList, IonTextarea,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";
import {TarjetaEventoComponent} from "../tarjeta-evento/tarjeta-evento.component";
import {PlantillaComponent} from "../plantilla/plantilla.component";


@Component({
  selector: 'app-pag-modificar-evento',
  templateUrl: './pag-modificar-evento.component.html',
  styleUrls: ['./pag-modificar-evento.component.scss'],
  standalone: true,
  imports: [FormsModule, IonList, IonItem, IonInput, IonButton, IonContent, IonTitle, IonToolbar, IonHeader, TarjetaEventoComponent, PlantillaComponent, IonTextarea]
})
export class PagModificarEventoComponent  implements OnInit {

  id!: number;
  evento: Evento = {} as Evento;

  constructor(
    private route: ActivatedRoute,
    private eventoService: EventoService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.eventoService.getEventoPorId(this.id).subscribe(ev => {
      this.evento = ev;

      //Conversion de fecha
      if(this.evento.fecha) {
        this.evento.fecha = this.evento.fecha.slice(0, 16);
      }
    });
  }


  guardarCambios() {


    const dto = {
      nombre: this.evento.nombre,
      descripcion: this.evento.descripcion,
      fecha: this.evento.fecha,
      lugar: this.evento.lugar,
      requisitos: this.evento.requisitos,
      precio: this.evento.precio,
      urlImagen: this.evento.urlImagen
    };

    this.eventoService.actualizarEvento(this.id, dto).subscribe({
      next: () => {
        alert("Evento actualizado correctamente");
        this.router.navigate(['/pag-eventos']);
      },
      error: (error) => {
        console.error(error);
        alert("Error al actualizar evento");
      }
    });

  }
}
