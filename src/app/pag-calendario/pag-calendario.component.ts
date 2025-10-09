import { Component, OnInit } from '@angular/core';
import {PlantillaComponent} from "../plantilla/plantilla.component";
import {TarjetaEventoComponent} from "../tarjeta-evento/tarjeta-evento.component";
import {IonDatetime, IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-pag-calendario',
  templateUrl: './pag-calendario.component.html',
  styleUrls: ['./pag-calendario.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, PlantillaComponent,DatePipe,],
})
export class PagCalendarioComponent implements OnInit {
  datetime: string = ''; // Aquí se guardará la fecha seleccionada



  constructor() { }

  ngOnInit() {}

}
