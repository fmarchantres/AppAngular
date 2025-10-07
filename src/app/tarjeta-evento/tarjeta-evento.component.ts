import {Component, Input, OnInit} from '@angular/core';
import {IonButton, IonCheckbox, IonItem, IonLabel} from "@ionic/angular/standalone";
import {PlantillaComponent} from "../plantilla/plantilla.component";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-tarjeta-evento',
  templateUrl: './tarjeta-evento.component.html',
  styleUrls: ['./tarjeta-evento.component.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonCheckbox,
    IonItem,
    IonLabel,
    PlantillaComponent,
    NgIf,
    NgForOf,
    FormsModule,
  ]
})
export class TarjetaEventoComponent  implements OnInit {

  @Input() titulo: string = '';
  @Input() imagen: string = '';
  @Input() info: {icono: string, etiqueta: string, valor: string}[] = [];
  @Input() mostrarCheckbox: boolean = false;
  @Input() mostrarBotones: boolean = false;
  recibirNotificaciones: boolean = false;


  ngOnInit() {
  }

}
