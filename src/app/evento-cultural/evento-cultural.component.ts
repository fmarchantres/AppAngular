import { Component, OnInit } from '@angular/core';
import {TarjetaEventoComponent} from "../tarjeta-evento/tarjeta-evento.component";

@Component({
    selector: 'app-evento-cultural',
    templateUrl: './evento-cultural.component.html',
    styleUrls: ['./evento-cultural.component.scss'],
    standalone: true,
    imports: [
        TarjetaEventoComponent
    ]
})
export class EventoCulturalComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
