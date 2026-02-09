import { Component } from '@angular/core';
import { PlantillaComponent } from "../plantilla/plantilla.component";
import { FormsModule } from "@angular/forms";
import {
  IonSelect,
  IonSelectOption,
  IonCard,
  IonCardContent,
  IonLabel,
  IonInput,
  IonButton
} from "@ionic/angular/standalone";

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-pag-subida-fotos',
  standalone: true,
  templateUrl: './pag-subida-fotos.component.html',
  styleUrls: ['./pag-subida-fotos.component.scss'],
  imports: [
    PlantillaComponent,
    FormsModule,
    IonSelect, IonSelectOption,
    IonCard, IonCardContent,
    IonLabel, IonInput, IonButton
  ]
})
export class PagSubidaFotosComponent {

  eventoSeleccionado: string = '';
  descripcion: string = '';

  async abrirCamara() {
    try {
      const image = await Camera.getPhoto({
        quality: 80,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        saveToGallery: true // Esta opción requiere WRITE_EXTERNAL_STORAGE en Android < 10
      });

      console.log('Ruta de la foto:', image.path);
    } catch (error) {
      console.error('Error al capturar o guardar la foto:', error);
    }
  }

  subirFotos() {
    console.log("Evento:", this.eventoSeleccionado);
    console.log("Descripción:", this.descripcion);
  }
}
