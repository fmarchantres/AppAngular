import { Component, OnInit } from '@angular/core';
import {TarjetaEventoComponent} from "../tarjeta-evento/tarjeta-evento.component";

@Component({
    selector: 'app-evento-deportivo',
    templateUrl: './evento-deportivo.component.html',
    styleUrls: ['./evento-deportivo.component.scss'],
    standalone: true,
    imports: [
        TarjetaEventoComponent
    ]
})
export class EventoDeportivoComponent  implements OnInit {


  constructor() { }

  ngOnInit() {}

}
