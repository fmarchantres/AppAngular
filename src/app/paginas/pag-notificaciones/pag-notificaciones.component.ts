import { Component, OnInit } from '@angular/core';
import {PlantillaComponent} from "../plantilla/plantilla.component";

@Component({
  selector: 'app-pag-notificaciones',
  templateUrl: './pag-notificaciones.component.html',
  styleUrls: ['./pag-notificaciones.component.scss'],
  standalone: true,
  imports: [
    PlantillaComponent
  ]
})
export class PagNotificacionesComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
