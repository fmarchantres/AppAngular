import { Component, OnInit } from '@angular/core';
import {PlantillaComponent} from "../plantilla/plantilla.component";
import {IonButton, IonCheckbox, IonItem, IonLabel} from "@ionic/angular/standalone";
import {FormsModule} from "@angular/forms";
import {TarjetaEventoComponent} from "../tarjeta-evento/tarjeta-evento.component";

@Component({
    selector: 'app-evento-ciencias',
    templateUrl: './evento-ciencias.component.html',
    styleUrls: ['./evento-ciencias.component.scss'],
    standalone: true,
  imports: [PlantillaComponent, IonCheckbox, IonLabel, IonItem, FormsModule, IonButton, TarjetaEventoComponent]
})

export class EventoCienciasComponent implements OnInit {
  recibirNotificaciones: boolean = false;

  constructor() {}

  ngOnInit() {}
}

