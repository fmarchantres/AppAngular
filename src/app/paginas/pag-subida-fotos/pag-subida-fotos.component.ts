import { Component } from '@angular/core';
import { PlantillaComponent } from "../plantilla/plantilla.component";
import { FormsModule } from "@angular/forms";
import { IonSelect, IonSelectOption, IonCard, IonCardContent, IonLabel, IonInput, IonButton } from "@ionic/angular/standalone";
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
  fotos: File[] = [];

  seleccionarFotos(event:any){
    this.fotos = [...event.target.files];
  }

  subirFotos(){
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

      this.fotos.push(file);
    }
  }


}
