import { Component } from '@angular/core';
import { PlantillaComponent } from "../plantilla/plantilla.component";
import { FormsModule } from "@angular/forms";
import { IonSelect, IonSelectOption, IonCard, IonCardContent, IonLabel, IonInput, IonButton } from "@ionic/angular/standalone";
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { GaleriaService } from '../../servicios/galeria.service';



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
  fotos: File[] = [];

  constructor(private galeriaService: GaleriaService) {}

  seleccionarFotos(event: any) {
    this.fotos = [...event.target.files];
  }

  subirFotos() {
    console.log("EventoService:", this.eventoSeleccionado);
    console.log("Descripción:", this.descripcion);
    console.log("Fotos seleccionadas:", this.fotos);
  }

  async abrirCamara() {
    const image = await Camera.getPhoto({
      quality: 80,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });

    if (image.webPath) {
      const response = await fetch(image.webPath);
      const blob = await response.blob();

      const file = new File(
        [blob],
        `foto_${Date.now()}.jpg`,
        { type: blob.type }
      );

      // 🔥 AQUÍ LLAMAMOS AL PASO 2
      this.subirFoto(file);
    }
  }

  //  PASO 2 → AQUÍ EXACTAMENTE
  private async subirFoto(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    fetch('https://javaspringbooteventosescolares-1.onrender.com/api/images/upload', {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        console.log('Imagen subida:', data.imageUrl);

        // 👉 guardamos la URL
        this.galeriaService.agregarImagen(data.imageUrl);
      })
      .catch(err => {
        console.error('Error subiendo imagen', err);
      });
  }
}

