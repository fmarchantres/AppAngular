import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { PlantillaComponent } from "../plantilla/plantilla.component";
import { UsuarioService} from "../../servicios/usuario.service";
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
  ]
})
export class PagLoginComponent {

  constructor(
    private toastController: ToastController,
    private router: Router,
    private usuarioService: UsuarioService
  ) {
  }

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



// METODO LOGIN
  async login(form: NgForm) {
    const { email, password } = form.value;

    if (!email || !password) {
      await this.mostrarToast("Completa todos los campos", "warning");
      return;
    }

    this.usuarioService.login(email, password).subscribe({
      next: async (usuario) => {
        await this.mostrarToast("Login correcto", "success");

        // Guardar usuario real devuelto por backend
        localStorage.setItem("usuario", JSON.stringify(usuario));

        this.router.navigate(['/pag-perfil']);
      },
      error: async () => {
        await this.mostrarToast("Email o contraseña incorrectos", "danger");
      }
    });
  }



}


