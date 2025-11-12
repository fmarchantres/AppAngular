import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlantillaComponent } from '../plantilla/plantilla.component';
import { ContactoService } from '../../servicios/contacto.service'; // ⬅️ nuevo
import {
  IonButton, IonCol, IonGrid, IonInput, IonItem, IonLabel,
  IonRow, IonTextarea, ToastController
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-pag-contacto',
  templateUrl: './pag-contacto.component.html',
  styleUrls: ['./pag-contacto.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    PlantillaComponent,
    IonGrid, IonRow, IonCol, IonItem, IonInput, IonLabel, IonTextarea, IonButton,
  ]
})
export class PagContactoComponent {
  constructor(
    private toastController: ToastController,
    private contactoService: ContactoService // Servicio nuevo para enviar el form de contacto
  ) {}

  async enviarMensaje(form: any) {
    if (!form.valid) return;

    this.contactoService.enviarMensaje(form.value).subscribe({
      next: async () => {
        const toast = await this.toastController.create({
          message: 'Mensaje enviado correctamente',
          duration: 2000, color: 'success', position: 'bottom'
        });
        await toast.present();
        form.reset();
      },
      error: async () => {
        const toast = await this.toastController.create({
          message: 'Error al enviar el mensaje',
          duration: 2000, color: 'danger', position: 'bottom'
        });
        await toast.present();
      }
    });
  }
}
