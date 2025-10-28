import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PlantillaComponent } from '../plantilla/plantilla.component';
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
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-pag-registro',
  templateUrl: './pag-registro.component.html',
  styleUrls: ['./pag-registro.component.scss'],
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
    IonButton,
    RouterLink,
    IonContent
  ]
})
export class PagRegistroComponent {

  constructor(
    private toastController: ToastController,
    private router: Router
  ) {}

  // Método para mostrar mensajes tipo Toast
  async mostrarToast(mensaje: string, color: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      color: color,
      position: 'bottom'
    });
    await toast.present();
  }

  // Método de registro con validación de contraseñas
  async register(form: NgForm) {
    const { password, confirmPassword } = form.value;

    if (!form.valid) {
      this.mostrarToast('Por favor, completa todos los campos ⚠️', 'warning');
      return;
    }

    if (password !== confirmPassword) {
      this.mostrarToast('Las contraseñas no coinciden', 'danger');
      return;
    }

    console.log('Formulario válido:', form.value);
    await this.mostrarToast('Registro exitoso', 'success');

    // Redirigir al login después de 1.5 segundos
    setTimeout(() => {
      this.router.navigate(['/pag-login']);
    }, 1500);
  }
}
