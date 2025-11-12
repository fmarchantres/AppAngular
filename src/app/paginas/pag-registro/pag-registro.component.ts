import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PlantillaComponent } from '../plantilla/plantilla.component';
import { UsuarioService } from '../../servicios/usuario.service';
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
  ]
})
export class PagRegistroComponent {

  constructor(
    private toastController: ToastController,
    private router: Router,
    private usuarioService: UsuarioService
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

  // Método de registro con validación y conexión al backend
  async register(form: NgForm) {
    const { password, confirmPassword, ...usuario } = form.value;

    if (!form.valid) {
     await this.mostrarToast('Por favor, completa todos los campos ⚠️', 'warning');
      return;
    }

    if (password !== confirmPassword) {
      await this.mostrarToast('Las contraseñas no coinciden ❌', 'danger');
      return;
    }

    usuario.password = password;

    this.usuarioService.registrar(usuario).subscribe({
      next: async () => {
        await this.mostrarToast('Registro exitoso ✅', 'success');
        setTimeout(() => this.router.navigate(['/pag-login']), 1500);
      },
      error: async (err) => {
        const msg = err.error || 'Error al registrar ❌';
        await this.mostrarToast(msg, 'danger');
      }
    });
  }
}
