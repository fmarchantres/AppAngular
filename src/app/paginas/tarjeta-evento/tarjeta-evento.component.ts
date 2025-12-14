import { Component, Input, OnInit } from '@angular/core';
import { IonButton, IonCheckbox, IonItem, IonLabel } from '@ionic/angular/standalone';
import { PlantillaComponent } from '../plantilla/plantilla.component';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import {EventoService}  from "../../servicios/evento.service";

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
  @Input() info: { etiqueta: string; valor: string }[] = [];
  @Input() mostrarCheckbox: boolean = false;
  @Input() mostrarBotones: boolean = false;
  @Input() esGratuito: boolean = false;
  @Input() id!: number;


  recibirNotificaciones: boolean = false;
  registrado: boolean = false;
  interesado: boolean = false; //Estado del botón "Me interesa"



  constructor(private eventoService: EventoService, private router: Router) { }


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


  eliminarEvento(){
    if (!this.id) return;
    if(!confirm("¿Está seguro que quiere eliminar este evento?")){
      return;
    }

    this.eventoService.eliminarEvento(this.id).subscribe({
      next: (result) => {
        alert("Evento eliminado correctamente");
        this.router.navigate(['/pag-eventos']);
      },
      error: (error) => {
        console.error("Error al eliminar el evento: ", error);
        alert("No se pudo eliminar el evento");
      }
    });
  }
}
