import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {RouterLink, RouterOutlet} from "@angular/router";
import {PlantillaComponent} from "../plantilla/plantilla.component";

@Component({
  selector: 'app-pag-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, PlantillaComponent]
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
