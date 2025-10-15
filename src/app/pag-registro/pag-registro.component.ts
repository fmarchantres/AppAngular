import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlantillaComponent } from '../plantilla/plantilla.component';
import { IonButton, IonCol, IonContent, IonGrid, IonInput, IonItem, IonLabel, IonRow } from '@ionic/angular/standalone';
import {RouterLink} from "@angular/router";

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
    RouterLink
  ]
})

export class PagRegistroComponent {

  // Puedes añadir propiedades para ngModel si quieres capturar los datos del formulario
  email: string = '';
  password: string = '';

  // Función que se ejecuta al enviar el formulario
  register(form: any) {
    if (form.valid) {
      console.log('Formulario válido:', this.email, this.password);
      // Aquí añadirías la lógica de registro
    }
  }
}
