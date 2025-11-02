import { Component } from '@angular/core';
import { PlantillaComponent } from "../plantilla/plantilla.component";
import { FormsModule } from "@angular/forms";
import { IonSelect, IonSelectOption, IonCard, IonCardContent, IonLabel, IonInput, IonButton } from "@ionic/angular/standalone";

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
    console.log("Evento:", this.eventoSeleccionado);
    console.log("Descripción:", this.descripcion);
    console.log("Fotos seleccionadas:", this.fotos);
  }

}
