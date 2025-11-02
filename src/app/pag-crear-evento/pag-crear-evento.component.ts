import { Component } from '@angular/core';
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

  constructor(private toastController: ToastController) {}

  async enviarMensaje(form: NgForm) {
    if (form.valid) {
      const toast = await this.toastController.create({
        message: 'Evento creado correctamente.',
        duration: 2000,
        color: 'success'
      });
      toast.present();

      form.reset();
    }
  }

}
