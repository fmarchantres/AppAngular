import { Component, OnInit } from '@angular/core';
import {PlantillaComponent} from "../plantilla/plantilla.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-pag-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
  standalone: true,
  imports: [PlantillaComponent, RouterLink]
})
export class EventosComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
