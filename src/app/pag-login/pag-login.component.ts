import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PlantillaComponent } from "../plantilla/plantilla.component";
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonRow
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

  // Este método se llamará cuando el usuario haga submit
  login(form: NgForm) {
    if (form.valid) {
      console.log('Formulario válido', form.value);
      // Aquí podrías hacer la llamada a tu servicio de autenticación
    } else {
      console.log('Formulario inválido');
    }
  }
}
