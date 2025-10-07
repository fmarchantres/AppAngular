import { Component, OnInit } from '@angular/core';
import {PlantillaComponent} from "../plantilla/plantilla.component";

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
  standalone: true,
  imports: [PlantillaComponent]
})
export class EventosComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
