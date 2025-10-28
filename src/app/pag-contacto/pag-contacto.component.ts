import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlantillaComponent } from '../plantilla/plantilla.component';
import {
  IonButton,
  IonCol,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  IonTextarea,
  IonToast,
  ToastController
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-pag-contacto',
  templateUrl: './pag-contacto.component.html',
  styleUrls: ['./pag-contacto.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    PlantillaComponent,
    IonGrid,
    IonRow,
    IonCol,
    IonItem,
    IonInput,
    IonLabel,
    IonTextarea,
    IonButton,
    IonToast,
  ]
})
export class PagContactoComponent {
  constructor(private toastController: ToastController) {}

  async enviarMensaje(form: any) {
    if (form.valid) {
      console.log('Formulario enviado:', form.value);

      const toast = await this.toastController.create({
        message: 'Mensaje enviado correctamente',
        duration: 2000,
        color: 'success',
        position: 'bottom'
      });

      await toast.present();
      form.reset(); // Limpia el formulario tras enviar
    }
  }
}
