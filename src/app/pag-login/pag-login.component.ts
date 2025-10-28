import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { PlantillaComponent } from "../plantilla/plantilla.component";
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  ToastController
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-pag-login',
  templateUrl: './pag-login.component.html',
  styleUrls: ['./pag-login.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    PlantillaComponent,
    IonGrid,
    IonRow,
    IonCol,
    IonItem,
    IonInput,
    IonLabel,
    IonButton,
    IonContent
  ]
})
export class PagLoginComponent {

  constructor(
    private toastController: ToastController,
    private router: Router
  ) {}

  // Método para mostrar el mensaje Toast
  async mostrarToast(mensaje: string, color: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      color: color,
      position: 'bottom'
    });
    await toast.present();
  }

  // Este método se llama al enviar el formulario
  async login(form: NgForm) {
    if (form.valid) {
      console.log('Formulario válido', form.value);
      await this.mostrarToast('Inicio de sesión exitoso', 'success');

      // Redirige al inicio después de 1 segundo
      setTimeout(() => {
        this.router.navigate(['/inicio']);
      }, 1000);
    } else {
      console.log('Formulario inválido');
      this.mostrarToast('Por favor, completa todos los campos', 'warning');
    }
  }
}
