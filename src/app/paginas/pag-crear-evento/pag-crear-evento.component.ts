import { Component } from '@angular/core';
import { EventoService } from '../../servicios/evento.service';

import { NgForm, FormsModule } from '@angular/forms';
import {
  IonButton, IonCol, IonGrid,IonInput, IonItem, IonLabel, IonRow, IonTextarea, ToastController
} from '@ionic/angular/standalone';
import { PlantillaComponent } from "../plantilla/plantilla.component";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-pag-crear-evento',
  templateUrl: './pag-crear-evento.component.html',
  styleUrls: ['./pag-crear-evento.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    PlantillaComponent,
    RouterModule,
    IonGrid,
    IonRow,
    IonCol,
    IonItem,
    IonInput,
    IonTextarea,
    IonLabel,
    IonButton,
  ]
})
export class PagCrearEventoComponent {

  constructor(private toastController: ToastController,
              private eventoService: EventoService) { }





  //TOAST EVENTO CREADO
  async crearEvento(form: NgForm) {
    if (!form.valid) {
      const toast = await this.toastController.create({
        message: 'Por favor rellena todos los campos.',
        duration: 2000,
        color: 'warning'
      });
      toast.present();
      return;
    }
    const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');

    const evento = {
      nombre: form.value.nombre,
      descripcion: form.value.descripcion,
      fecha: form.value.fecha ,
      lugar: form.value.lugar,
      requisitos: form.value.requisitos,
      precio: form.value.precio,
      creadorId: usuario.id
    };


    //ENVIAR AL BACKEND
    this.eventoService.crearEvento(evento).subscribe({
      next: async () => {
        const toast = await this.toastController.create({
          message: 'Evento creado correctamente',
          duration: 2000,
          color: 'success'
        });
        toast.present();
        form.reset();
      },
      error: async (err) => {
        console.error('Error al crear evento:', err);
        const toast = await this.toastController.create({
          message: 'Error al crear el evento',
          duration: 2000,
          color: 'danger'
        });
        toast.present();
      }
    });
  }
}
