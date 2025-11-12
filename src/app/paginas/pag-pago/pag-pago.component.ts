import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PlantillaComponent } from '../plantilla/plantilla.component';
import {
  IonCard,
  IonItem,
  IonLabel,
  IonContent,
  IonButton,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-pag-pago',
  templateUrl: './pag-pago.component.html',
  styleUrls: ['./pag-pago.component.scss'],
  standalone: true,
  imports: [
    PlantillaComponent,
    IonCard,
    IonItem,
    IonLabel,
    IonContent,
    IonButton,
    IonGrid,
    IonRow,
    IonCol
  ]
})
export class PagPagoComponent {
  constructor(private toastController: ToastController) {}

  // Función para mostrar el mensaje de pago simulado
  async mostrarToast(metodo: string) {
    const toast = await this.toastController.create({
      message: `Pago realizado con ${metodo}`,
      duration: 2000,
      color: 'success',
      position: 'bottom'
    });
    await toast.present();
  }

  pagarConPaypal() {
    this.mostrarToast('PayPal');
  }

  pagarConBizum() {
    this.mostrarToast('Bizum');
  }

  pagarConTarjeta() {
    this.mostrarToast('Tarjeta de crédito');
  }
}
