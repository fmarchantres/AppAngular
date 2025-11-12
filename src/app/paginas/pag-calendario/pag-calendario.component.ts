import { Component, OnInit } from '@angular/core';
import {PlantillaComponent} from "../plantilla/plantilla.component";
import {TarjetaEventoComponent} from "../tarjeta-evento/tarjeta-evento.component";
import {IonDatetime, IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {DatePipe, NgForOf} from "@angular/common";


@Component({
  selector: 'app-pag-calendario',
  templateUrl: './pag-calendario.component.html',
  styleUrls: ['./pag-calendario.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, PlantillaComponent, DatePipe, NgForOf,],
})
export class PagCalendarioComponent implements OnInit {
  datetime: string = ''; // Aquí se guardará la fecha seleccionada

  eventosProximos = [
    { titulo: 'Feria de Ciencias', fecha: '2025-11-05', precio: '8€' },
    { titulo: 'Festival Cultural', fecha: '2025-11-10', precio: 'Gratis' },
    { titulo: 'Torneo Deportivo', fecha: '2025-12-02', precio: 'Gratis' }
  ];


  constructor() { }

  ngOnInit() {}

}
